const fs = require('fs');
const files = [
  './src/app/[locale]/chemistry/[...slug]/page.tsx',
  './src/app/[locale]/sports/[...slug]/page.tsx',
  './src/app/[locale]/statistics/[...slug]/page.tsx'
];

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  content = content.replace(/import\s+\{\s*useTranslations\s*\}\s+from\s+'next-intl';/, "import { getTranslations } from 'next-intl/server';");
  
  const target = 'export async function generateMetadata({ params }: Props): Promise<Metadata> {';
  const replacement = 'export async function generateMetadata({ params }: Props): Promise<Metadata> {\n  const tCalc = await getTranslations(\'Calculators\');';
  
  if (content.includes(target) && !content.includes('const tCalc = await getTranslations')) {
    content = content.replace(target, replacement);
  }
  
  fs.writeFileSync(file, content, 'utf8');
  console.log('Fixed ' + file);
});
