import React from 'react';
import { Metadata } from 'next';
import ChemistryClientPage from './ChemistryClientPage';
import { CHEMISTRY_DATA } from '@/lib/chemistry-data';
import { getCalculatorBySlug } from '@/lib/calculator-registry';
import Script from 'next/script';

import { getTranslations } from 'next-intl/server';
interface Props {
  params: Promise<{ slug: string[] }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const tCalc = await getTranslations('Calculators');
  const { slug } = await params;
  const baseUrl = 'https://calcverse.ai';
  
  if (slug.length === 1) {
    const cat = CHEMISTRY_DATA.find(c => c.id === slug[0]);
    if (cat) {
      return {
        title: `${cat.title} | CalcVerse AI`,
        description: `Use our free ${cat.title.toLowerCase()} calculators for your chemical research, coursework, and laboratory calculations.`,
        openGraph: {
          title: `${cat.title} | Chemistry Tools`,
          description: `Access professional ${cat.title.toLowerCase()} calculators online.`,
          url: `${baseUrl}/chemistry/${cat.id}`,
          type: 'website',
        },
      };
    }
    
    const calc = getCalculatorBySlug(slug[0]);
    if (calc) {
      return {
        title: `${tCalc.has(`${(calc.id||'').replace(/-/g, '_')}_name`) ? tCalc(`${(calc.id||'').replace(/-/g, '_')}_name`) : calc.name} | Chemistry Calculator`,
        description: calc.description,
        openGraph: {
          title: calc.name,
          description: calc.description,
          url: `${baseUrl}/chemistry/${calc.id}`,
        }
      };
    }
  }
  
  if (slug.length === 2) {
    const cat = CHEMISTRY_DATA.find(c => c.id === slug[0]);
    const calc = getCalculatorBySlug(slug[1]);
    if (calc) {
      return {
        title: `${tCalc.has(`${(calc.id||'').replace(/-/g, '_')}_name`) ? tCalc(`${(calc.id||'').replace(/-/g, '_')}_name`) : calc.name} | ${cat?.title || 'Chemistry'}`,
        description: calc.description,
        openGraph: {
          title: `${tCalc.has(`${(calc.id||'').replace(/-/g, '_')}_name`) ? tCalc(`${(calc.id||'').replace(/-/g, '_')}_name`) : calc.name} - ${cat?.title}`,
          description: calc.description,
          url: `${baseUrl}/chemistry/${slug[0]}/${slug[1]}`,
        }
      };
    }
  }

  return {
    title: 'Chemistry Calculator | CalcVerse AI',
    description: 'Explore our specialized chemistry calculators.',
  };
}

export default async function ChemistryDynamicPage({ params }: Props) {
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
      <ChemistryClientPage slugArray={resolvedParams.slug} />
    </>
  );
}
