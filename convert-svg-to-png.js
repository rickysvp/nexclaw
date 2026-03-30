const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const logosDir = './public/logos';
const files = fs.readdirSync(logosDir);

async function convertSvgToPng() {
  for (const file of files) {
    if (file.endsWith('.svg')) {
      const svgPath = path.join(logosDir, file);
      const pngPath = path.join(logosDir, file.replace('.svg', '.png'));
      
      // Skip if PNG already exists
      if (fs.existsSync(pngPath)) {
        console.log(`Skipping ${file} - PNG already exists`);
        continue;
      }
      
      try {
        const svgBuffer = fs.readFileSync(svgPath);
        await sharp(svgBuffer)
          .resize(128, 128)
          .png()
          .toFile(pngPath);
        console.log(`Converted ${file} to PNG`);
      } catch (error) {
        console.error(`Error converting ${file}:`, error.message);
      }
    }
  }
}

convertSvgToPng();
