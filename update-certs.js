import { PDFDocument } from 'pdf-lib';
import fs from 'fs';
import path from 'path';

async function generateAccuratePdfs() {
  const certsDir = 'C:/Users/acer/.gemini/antigravity/scratch/harish-portfolio/public/certificates';

  // 1. Embed Algothon image into Algothon_Certificate.pdf
  try {
    const imgBytes = fs.readFileSync(path.join(certsDir, 'Algothon_Certificate.jpg'));
    const pdfDoc = await PDFDocument.create();
    const jpgImage = await pdfDoc.embedJpg(imgBytes);
    const { width, height } = jpgImage.scale(1);
    
    // Landscape A4: 841.89 x 595.28
    const page = pdfDoc.addPage([841.89, 595.28]);
    const scale = Math.min(841.89 / width, 595.28 / height);
    const imgWidth = width * scale;
    const imgHeight = height * scale;

    page.drawImage(jpgImage, {
      x: (841.89 - imgWidth) / 2,
      y: (595.28 - imgHeight) / 2,
      width: imgWidth,
      height: imgHeight,
    });

    pdfDoc.setTitle("ALGOTHON '26 Certificate - Harishkumar L");
    const pdfBytes = await pdfDoc.save();
    fs.writeFileSync(path.join(certsDir, 'Algothon_Certificate.pdf'), pdfBytes);
    console.log("Successfully generated Algothon_Certificate.pdf from algothon.jpg");
  } catch (e) {
    console.error("Error Algothon:", e);
  }

  // 2. Embed HackeVerse image into HackeVerse_Certificate.pdf
  try {
    const imgBytes = fs.readFileSync(path.join(certsDir, 'HackeVerse_Certificate.jpg'));
    const pdfDoc = await PDFDocument.create();
    const jpgImage = await pdfDoc.embedJpg(imgBytes);
    const { width, height } = jpgImage.scale(1);
    
    const page = pdfDoc.addPage([841.89, 595.28]);
    const scale = Math.min(841.89 / width, 595.28 / height);
    const imgWidth = width * scale;
    const imgHeight = height * scale;

    page.drawImage(jpgImage, {
      x: (841.89 - imgWidth) / 2,
      y: (595.28 - imgHeight) / 2,
      width: imgWidth,
      height: imgHeight,
    });

    pdfDoc.setTitle("HACKNOWA Global Hackathon 2026 Certificate - Harishkumar L");
    const pdfBytes = await pdfDoc.save();
    fs.writeFileSync(path.join(certsDir, 'HackeVerse_Certificate.pdf'), pdfBytes);
    console.log("Successfully generated HackeVerse_Certificate.pdf from Hackverse.jpeg");
  } catch (e) {
    console.error("Error HackeVerse:", e);
  }

  // 3. Embed Prompt Run image into Prompt_Run_Certificate.pdf
  try {
    const imgBytes = fs.readFileSync(path.join(certsDir, 'Prompt_Run_Certificate.jpg'));
    const pdfDoc = await PDFDocument.create();
    const jpgImage = await pdfDoc.embedJpg(imgBytes);
    const { width, height } = jpgImage.scale(1);
    
    const page = pdfDoc.addPage([841.89, 595.28]);
    const scale = Math.min(841.89 / width, 595.28 / height);
    const imgWidth = width * scale;
    const imgHeight = height * scale;

    page.drawImage(jpgImage, {
      x: (841.89 - imgWidth) / 2,
      y: (595.28 - imgHeight) / 2,
      width: imgWidth,
      height: imgHeight,
    });

    pdfDoc.setTitle("Prompt Run 2026 Certificate - Harishkumar L");
    const pdfBytes = await pdfDoc.save();
    fs.writeFileSync(path.join(certsDir, 'Prompt_Run_Certificate.pdf'), pdfBytes);
    console.log("Successfully generated Prompt_Run_Certificate.pdf from promt run.jpeg");
  } catch (e) {
    console.error("Error Prompt Run:", e);
  }
}

generateAccuratePdfs();
