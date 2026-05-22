import React from 'react';
import { Metadata } from 'next';
import SportsClientPage from './SportsClientPage';
import { SPORTS_DATA } from '@/lib/sports-data';
import { getCalculatorBySlug } from '@/lib/calculator-registry';
import Script from 'next/script';

import { useTranslations } from 'next-intl';
interface Props {
  params: Promise<{ slug: string[] }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const baseUrl = 'https://calcverse.ai';
  
  if (slug.length === 1) {
    const cat = SPORTS_DATA.find(c => c.id === slug[0]);
    if (cat) {
      return {
        title: `${cat.title} | CalcVerse AI`,
        description: `Use our free ${cat.title.toLowerCase()} for your training, athletic analysis, and calculations.`,
        openGraph: {
          title: `${cat.title} | Sports Tools`,
          description: `Access professional ${cat.title.toLowerCase()} online.`,
          url: `${baseUrl}/sports/${cat.id}`,
          type: 'website',
        },
      };
    }
    
    const calc = getCalculatorBySlug(slug[0]);
    if (calc) {
      return {
        title: `${tCalc.has(`${(calc.slug||'').replace(/-/g, '_')}_name`) ? tCalc(`${(calc.slug||'').replace(/-/g, '_')}_name`) : calc.name} | Sports Calculator`,
        description: calc.description,
        openGraph: {
          title: calc.name,
          description: calc.description,
          url: `${baseUrl}/sports/${calc.id}`,
        }
      };
    }
  }
  
  if (slug.length === 2) {
    const cat = SPORTS_DATA.find(c => c.id === slug[0]);
    const calc = getCalculatorBySlug(slug[1]);
    if (calc) {
      return {
        title: `${tCalc.has(`${(calc.slug||'').replace(/-/g, '_')}_name`) ? tCalc(`${(calc.slug||'').replace(/-/g, '_')}_name`) : calc.name} | ${cat?.title || 'Sports'}`,
        description: calc.description,
        openGraph: {
          title: `${tCalc.has(`${(calc.slug||'').replace(/-/g, '_')}_name`) ? tCalc(`${(calc.slug||'').replace(/-/g, '_')}_name`) : calc.name} - ${cat?.title}`,
          description: calc.description,
          url: `${baseUrl}/sports/${slug[0]}/${slug[1]}`,
        }
      };
    }
  }

  return {
    title: 'Sports Calculator | CalcVerse AI',
    description: 'Explore our specialized sports and training calculators.',
  };
}

export default async function SportsDynamicPage({ params }: Props) {
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
      <SportsClientPage slugArray={resolvedParams.slug} />
    </>
  );
}
