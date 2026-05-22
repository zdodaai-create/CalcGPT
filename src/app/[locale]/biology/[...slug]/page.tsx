import React from 'react';
import { Metadata } from 'next';
import BiologyClientPage from './BiologyClientPage';
import { BIOLOGY_DATA } from '@/lib/biology-data';
import { getCalculatorBySlug } from '@/lib/calculator-registry';
import Script from 'next/script';

import { getTranslations } from 'next-intl/server';
interface Props {
  params: Promise<{ slug: string[] }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const tCalc = await getTranslations('Calculators');
  const { slug } = await params;
  const baseUrl = 'https://calcgpt.online';

  if (slug.length === 1) {
    const cat = BIOLOGY_DATA.find(c => c.id === slug[0]);
    if (cat) {
      return {
        title: `${cat.title} | CalcVerse AI`,
        description: `Use our free ${cat.title.toLowerCase()} for your biological research and calculations.`,
        openGraph: {
          title: `${cat.title} | Biology Tools`,
          description: `Access professional ${cat.title.toLowerCase()} online.`,
          url: `${baseUrl}/biology/${cat.id}`,
          type: 'website',
        },
      };
    }

    const calc = getCalculatorBySlug(slug[0]);
    if (calc) {
      return {
        title: `${tCalc(`${(calc.id || '').replace(/-/g, '_')}_name`) ?? calc.name} | Biology Calculator`,
        description: calc.description,
        openGraph: {
          title: calc.name,
          description: calc.description,
          url: `${baseUrl}/biology/${calc.id}`,
        }
      };
    }
  }

  if (slug.length === 2) {
    const cat = BIOLOGY_DATA.find(c => c.id === slug[0]);
    const calc = getCalculatorBySlug(slug[1]);
    if (calc) {
      return {
        title: `${tCalc(`${(calc.id || '').replace(/-/g, '_')}_name`) ?? calc.name} | ${cat?.title || 'Biology'}`,
        description: calc.description,
        openGraph: {
          title: `${tCalc(`${(calc.id || '').replace(/-/g, '_')}_name`) ?? calc.name} - ${cat?.title}`,
          description: calc.description,
          url: `${baseUrl}/biology/${slug[0]}/${slug[1]}`,
        }
      };
    }
  }

  return {
    title: 'Biology Calculator | CalcVerse AI',
    description: 'Explore our specialized biology calculators.',
  };
}

export default async function BiologyDynamicPage({ params }: Props) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;
  const calc = getCalculatorBySlug(slug[slug.length - 1]);

  const jsonLd = calc ? {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: calc.name,
    description: calc.description,
    applicationCategory: 'EducationalApplication',
    operatingSystem: 'Any',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
  } : null;

  return (
    <>
      {jsonLd && (
        <Script
          id="calculator-jsonld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      )}
      <BiologyClientPage slugArray={resolvedParams.slug} />
    </>
  );
}
