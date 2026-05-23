const fs = require('fs');
const path = require('path');

const messagesDir = path.join(__dirname, 'messages');
const files = fs.readdirSync(messagesDir).filter(f => f.endsWith('.json'));

for (const file of files) {
  const filePath = path.join(messagesDir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Replace 2,342 or 2.342 or 2 342 with the new count 2,492 or 2.492 or 2 492
  content = content.replace(/"heroTitle":\s*"(.*?)2[,\.\s]342(.*?)"/g, (match, p1, p2) => {
      // Determine the separator used in the match
      let separator = ',';
      if (match.includes('2.342')) separator = '.';
      if (match.includes('2 342')) separator = ' ';
      
      return `"heroTitle": "${p1}2${separator}492${p2}"`;
  });

  fs.writeFileSync(filePath, content);
  console.log(`Updated ${file}`);
}
