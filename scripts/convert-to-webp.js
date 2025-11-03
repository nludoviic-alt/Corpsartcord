import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const rootDir = path.resolve(__dirname, '..');

// Dossiers à convertir
const folders = [
  path.join(rootDir, 'public', 'pics 2'),
  path.join(rootDir, 'src', 'assets'),
  path.join(rootDir, 'public', 'pics'),
];

const imageExtensions = ['.jpg', '.jpeg', '.png', '.JPG', '.JPEG', '.PNG'];

async function convertToWebP(inputPath, outputPath) {
  try {
    await sharp(inputPath)
      .webp({ quality: 85, effort: 6 })
      .toFile(outputPath);
    console.log(`✓ Converted: ${path.basename(inputPath)} → ${path.basename(outputPath)}`);
    return true;
  } catch (error) {
    console.error(`✗ Error converting ${inputPath}:`, error.message);
    return false;
  }
}

async function processFolder(folderPath) {
  if (!fs.existsSync(folderPath)) {
    console.log(`⚠ Folder not found: ${folderPath}`);
    return;
  }

  const files = fs.readdirSync(folderPath);
  let converted = 0;
  let skipped = 0;

  for (const file of files) {
    const filePath = path.join(folderPath, file);
    const stat = fs.statSync(filePath);

    if (stat.isFile()) {
      const ext = path.extname(file);
      if (imageExtensions.includes(ext) && !file.endsWith('.webp')) {
        const webpPath = path.join(folderPath, path.basename(file, ext) + '.webp');
        
        // Skip if webp already exists
        if (fs.existsSync(webpPath)) {
          console.log(`⊘ Skipped (webp exists): ${file}`);
          skipped++;
          continue;
        }

        const success = await convertToWebP(filePath, webpPath);
        if (success) {
          converted++;
        }
      }
    }
  }

  console.log(`\n📊 Results for ${folderPath}:`);
  console.log(`   ✓ Converted: ${converted}`);
  console.log(`   ⊘ Skipped: ${skipped}`);
}

async function main() {
  console.log('🖼️  Starting WebP conversion...\n');

  for (const folder of folders) {
    console.log(`\n📁 Processing: ${folder}`);
    await processFolder(folder);
  }

  console.log('\n✨ Conversion complete!');
  console.log('\n⚠️  Next step: Update code references from .jpg/.png to .webp');
}

main().catch(console.error);



