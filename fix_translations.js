const fs = require('fs');
const path = require('path');

const baseDir = path.join(__dirname, 'src', 'app', '[locale]');

function fixDirectory(directory) {
  const files = fs.readdirSync(directory);
  
  for (const file of files) {
    const fullPath = path.join(directory, file);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      fixDirectory(fullPath);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      let modified = false;
      
      // Fix: replace calc.id.replace with safe optional chaining
      if (content.includes('calc.id.replace(/-/g,')) {
        content = content.replace(
          /\{tCalc\.has\(`\$\{calc\.id\.replace\(\/-\/g, '_'\)}_name`\) \? tCalc\(`\$\{calc\.id\.replace\(\/-\/g, '_'\)}_name`\) : calc\.name\}/g,
          '{calc.name}'
        );
        content = content.replace(
          /\{tCalc\.has\(`\$\{calc\.id\.replace\(\/-\/g, '_'\)}_desc`\) \? tCalc\(`\$\{calc\.id\.replace\(\/-\/g, '_'\)}_desc`\) : calc\.description\}/g,
          '{calc.description}'
        );
        modified = true;
      }
      
      // Also remove unused tCalc if we reverted everything
      if (modified && !content.includes('tCalc(') && !content.includes('tCalc.')) {
        content = content.replace(/  const tCalc = useTranslations\('Calculators'\);\n/g, '');
        // Check if useTranslations is still used elsewhere
        if (!content.includes('useTranslations(')) {
          content = content.replace(/import { useTranslations } from 'next-intl';\n/g, '');
        }
      }
      
      if (modified) {
        fs.writeFileSync(fullPath, content, 'utf8');
        console.log(`Fixed: ${fullPath}`);
      }
    }
  }
}

fixDirectory(baseDir);
console.log('All calc.id.replace crashes fixed!');
