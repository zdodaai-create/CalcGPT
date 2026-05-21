import React from 'react';
import { Metadata } from 'next';
import StatisticsClientPage from './StatisticsClientPage';
import { STATISTICS_DATA } from '@/lib/statistics-data';
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
    const cat = STATISTICS_DATA.find(c => c.id === slug[0]);
    if (cat) {
      return {
        title: `${cat.title} | CalcVerse AI`,
        description: `Use our free ${cat.title.toLowerCase()} calculators for your data analysis, research, and statistical calculations.`,
        openGraph: {
          title: `${cat.title} | Statistics Tools`,
          description: `Access professional ${cat.title.toLowerCase()} calculators online.`,
          url: `${baseUrl}/statistics/${cat.id}`,
          type: 'website',
        },
      };
    }
    
    const calc = getCalculatorBySlug(slug[0]);
    if (calc) {
      return {
        title: `${tCalc.has(`${(calc.id||calc.slug||'').replace(/-/g, '_')}_name`) ? tCalc(`${(calc.id||calc.slug||'').replace(/-/g, '_')}_name`) : calc.name} | Statistics Calculator`,
        description: calc.description,
        openGraph: {
          title: calc.name,
          description: calc.description,
          url: `${baseUrl}/statistics/${calc.id}`,
        }
      };
    }
  }
  
  if (slug.length === 2) {
    const cat = STATISTICS_DATA.find(c => c.id === slug[0]);
    const calc = getCalculatorBySlug(slug[1]);
    if (calc) {
      return {
        title: `${tCalc.has(`${(calc.id||calc.slug||'').replace(/-/g, '_')}_name`) ? tCalc(`${(calc.id||calc.slug||'').replace(/-/g, '_')}_name`) : calc.name} | ${cat?.title || 'Statistics'}`,
        description: calc.description,
        openGraph: {
          title: `${tCalc.has(`${(calc.id||calc.slug||'').replace(/-/g, '_')}_name`) ? tCalc(`${(calc.id||calc.slug||'').replace(/-/g, '_')}_name`) : calc.name} - ${cat?.title}`,
          description: calc.description,
          url: `${baseUrl}/statistics/${slug[0]}/${slug[1]}`,
        }
      };
    }
  }

  return {
    title: 'Statistics Calculator | CalcVerse AI',
    description: 'Explore our specialized statistics and data analysis calculators.',
  };
}

export default async function StatisticsDynamicPage({ params }: Props) {
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
      <StatisticsClientPage slugArray={resolvedParams.slug} />
    </>
  );
}
