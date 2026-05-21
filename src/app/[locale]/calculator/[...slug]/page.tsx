import { Metadata } from 'next';
import { getCalculatorBySlug } from '@/lib/calculator-registry';
import { CalculatorClient } from './CalculatorClient';

export async function generateMetadata({ params }: { params: { slug: string[] } }): Promise<Metadata> {
  const slug = params.slug ? params.slug[params.slug.length - 1] : '';
  const calculator = getCalculatorBySlug(slug);

  if (!calculator) {
    return { title: 'Calculator Not Found - CalcVerse' };
  }

  return {
    title: calculator.seoMeta?.title || `${calculator.name} | CalcVerse Educational Tools`,
    description: calculator.seoMeta?.description || calculator.description || `Learn and calculate with the ${calculator.name}. Free interactive tool with step-by-step guidance.`,
    keywords: calculator.seoMeta?.keywords || `${calculator.name.toLowerCase()}, calculator, formula, learn, step-by-step`,
  };
}

export default function CalculatorPage({ params }: { params: { slug: string[] } }) {
  const slug = params.slug ? params.slug[params.slug.length - 1] : '';
  return <CalculatorClient slug={slug} />;
}
