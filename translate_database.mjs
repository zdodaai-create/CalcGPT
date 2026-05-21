import fs from 'fs';
import path from 'path';
import OpenAI from 'openai'; // npm install openai

// Initialize OpenAI (Make sure process.env.OPENAI_API_KEY is set in your terminal!)
const openai = new OpenAI();

const TARGET_LANGS = [
  { code: 'es', name: 'Spanish' },
  { code: 'de', name: 'German' },
  { code: 'fr', name: 'French' },
  { code: 'pt', name: 'Portuguese' },
  { code: 'it', name: 'Italian' },
  { code: 'pl', name: 'Polish' },
  { code: 'nl', name: 'Dutch' },
  { code: 'sv', name: 'Swedish' }
];

async function translateBatch(keys, langName) {
  const prompt = `Translate the following JSON string values into ${langName}. Do not change the JSON keys, only translate the values. Return only valid JSON.\n\n${JSON.stringify(keys, null, 2)}`;
  
  const response = await openai.chat.completions.create({
    model: "gpt-4-turbo",
    response_format: { type: "json_object" },
    messages: [
      { role: "system", content: "You are a professional translator." },
      { role: "user", content: prompt }
    ]
  });
  
  return JSON.parse(response.choices[0].message.content);
}

async function main() {
  const enPath = path.join(process.cwd(), 'messages', 'en.json');
  const enData = JSON.parse(fs.readFileSync(enPath, 'utf8'));
  const calculators = enData.Calculators;
  
  // We chunk the requests so we don't exceed OpenAI token limits
  const entries = Object.entries(calculators);
  const CHUNK_SIZE = 50; 
  
  for (const lang of TARGET_LANGS) {
    console.log(`\n============================`);
    console.log(`Translating to ${lang.name}...`);
    
    const langPath = path.join(process.cwd(), 'messages', `${lang.code}.json`);
    let langData = fs.existsSync(langPath) ? JSON.parse(fs.readFileSync(langPath, 'utf8')) : {};
    if (!langData.Calculators) langData.Calculators = {};
    
    for (let i = 0; i < entries.length; i += CHUNK_SIZE) {
      const chunk = Object.fromEntries(entries.slice(i, i + CHUNK_SIZE));
      
      try {
        console.log(`  Translating chunk ${i} to ${i + CHUNK_SIZE}...`);
        const translatedChunk = await translateBatch(chunk, lang.name);
        
        // Merge translations
        langData.Calculators = { ...langData.Calculators, ...translatedChunk };
        
        // Save progress aggressively
        fs.writeFileSync(langPath, JSON.stringify(langData, null, 2), 'utf8');
      } catch (e) {
        console.error(`  Failed on chunk ${i}:`, e.message);
      }
      
      // Wait 1 second to avoid rate limits
      await new Promise(r => setTimeout(r, 1000));
    }
  }
  
  console.log("All translations generated successfully!");
}

main();
