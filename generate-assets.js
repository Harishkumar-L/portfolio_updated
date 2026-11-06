import { PDFDocument, rgb, StandardFonts } from 'pdf-lib';
import fs from 'fs';
import path from 'path';

async function generateAssets() {
  const publicDir = 'C:/Users/acer/.gemini/antigravity/scratch/harish-portfolio/public';
  const certsDir = path.join(publicDir, 'certificates');

  if (!fs.existsSync(certsDir)) {
    fs.mkdirSync(certsDir, { recursive: true });
  }

  // 1. Generate Harish_Kumar_Resume.pdf from the resume image
  try {
    const resumeJpgPath = path.join(publicDir, 'Harish_Kumar_Resume_preview.jpg');
    if (fs.existsSync(resumeJpgPath)) {
      const jpgBytes = fs.readFileSync(resumeJpgPath);
      const pdfDoc = await PDFDocument.create();
      const jpgImage = await pdfDoc.embedJpg(jpgBytes);
      const { width, height } = jpgImage.scale(1);
      
      // Standard A4: 595.28 x 841.89 pt
      const page = pdfDoc.addPage([595.28, 841.89]);
      const scale = Math.min(595.28 / width, 841.89 / height);
      const imgWidth = width * scale;
      const imgHeight = height * scale;
      const x = (595.28 - imgWidth) / 2;
      const y = (841.89 - imgHeight) / 2;

      page.drawImage(jpgImage, {
        x,
        y,
        width: imgWidth,
        height: imgHeight,
      });

      pdfDoc.setTitle('Harish Kumar - Resume');
      pdfDoc.setAuthor('Harish Kumar');
      pdfDoc.setSubject('Resume - B.Tech Information Technology');

      const pdfBytes = await pdfDoc.save();
      fs.writeFileSync(path.join(publicDir, 'Harish_Kumar_Resume.pdf'), pdfBytes);
      console.log('Successfully generated Harish_Kumar_Resume.pdf');
    }
  } catch (err) {
    console.error('Error generating Harish_Kumar_Resume.pdf:', err);
  }

  // 2. Generate Algothon_Certificate.pdf
  try {
    const algoJpgPath = path.join(certsDir, 'Algothon_Certificate.jpg');
    if (fs.existsSync(algoJpgPath)) {
      const jpgBytes = fs.readFileSync(algoJpgPath);
      const pdfDoc = await PDFDocument.create();
      const jpgImage = await pdfDoc.embedJpg(jpgBytes);
      const { width, height } = jpgImage.scale(1);
      const page = pdfDoc.addPage([841.89, 595.28]); // Landscape A4
      const scale = Math.min(841.89 / width, 595.28 / height);
      const imgWidth = width * scale;
      const imgHeight = height * scale;

      page.drawImage(jpgImage, {
        x: (841.89 - imgWidth) / 2,
        y: (595.28 - imgHeight) / 2,
        width: imgWidth,
        height: imgHeight,
      });

      pdfDoc.setTitle('ALGOTHON 26 Certificate - Harishkumar L');
      const pdfBytes = await pdfDoc.save();
      fs.writeFileSync(path.join(certsDir, 'Algothon_Certificate.pdf'), pdfBytes);
      console.log('Successfully generated Algothon_Certificate.pdf');
    }
  } catch (err) {
    console.error('Error generating Algothon_Certificate.pdf:', err);
  }

  // 3. Generate HackeVerse_Certificate.pdf
  try {
    const hackJpgPath = path.join(certsDir, 'HackeVerse_Certificate.jpg');
    if (fs.existsSync(hackJpgPath)) {
      const jpgBytes = fs.readFileSync(hackJpgPath);
      const pdfDoc = await PDFDocument.create();
      const jpgImage = await pdfDoc.embedJpg(jpgBytes);
      const { width, height } = jpgImage.scale(1);
      const page = pdfDoc.addPage([841.89, 595.28]); // Landscape A4
      const scale = Math.min(841.89 / width, 595.28 / height);
      const imgWidth = width * scale;
      const imgHeight = height * scale;

      page.drawImage(jpgImage, {
        x: (841.89 - imgWidth) / 2,
        y: (595.28 - imgHeight) / 2,
        width: imgWidth,
        height: imgHeight,
      });

      pdfDoc.setTitle('HACKNOWA / HackeVerse Certificate - Harishkumar L');
      const pdfBytes = await pdfDoc.save();
      fs.writeFileSync(path.join(certsDir, 'HackeVerse_Certificate.pdf'), pdfBytes);
      console.log('Successfully generated HackeVerse_Certificate.pdf');
    }
  } catch (err) {
    console.error('Error generating HackeVerse_Certificate.pdf:', err);
  }

  // 4. Generate Prompt_Run_Certificate.pdf & Thiranex_Internship_Certificate.pdf
  try {
    // Generate Thiranex Internship Certificate PDF
    const thiranexPdf = await PDFDocument.create();
    const tPage = thiranexPdf.addPage([841.89, 595.28]); // Landscape A4
    const helveticaBold = await thiranexPdf.embedFont(StandardFonts.HelveticaBold);
    const helvetica = await thiranexPdf.embedFont(StandardFonts.Helvetica);

    // Background & Borders
    tPage.drawRectangle({
      x: 20,
      y: 20,
      width: 801.89,
      height: 555.28,
      borderColor: rgb(0.23, 0.51, 0.96),
      borderWidth: 3,
      color: rgb(0.98, 0.99, 1),
    });
    tPage.drawRectangle({
      x: 30,
      y: 30,
      width: 781.89,
      height: 535.28,
      borderColor: rgb(0.86, 0.92, 0.99),
      borderWidth: 1,
    });

    // Content
    tPage.drawText('THIRANEX TECHNOLOGIES', {
      x: 260,
      y: 490,
      size: 26,
      font: helveticaBold,
      color: rgb(0.12, 0.28, 0.65),
    });

    tPage.drawText('INTERNSHIP COMPLETION CERTIFICATE', {
      x: 235,
      y: 440,
      size: 20,
      font: helveticaBold,
      color: rgb(0.06, 0.09, 0.16),
    });

    tPage.drawText('This is to certify that', {
      x: 360,
      y: 395,
      size: 14,
      font: helvetica,
      color: rgb(0.39, 0.45, 0.55),
    });

    tPage.drawText('HARISHKUMAR L', {
      x: 295,
      y: 345,
      size: 30,
      font: helveticaBold,
      color: rgb(0.14, 0.38, 0.92),
    });

    const bodyText = 'from Karpagam College of Engineering, Coimbatore, has successfully completed a professional';
    tPage.drawText(bodyText, {
      x: 165,
      y: 300,
      size: 13,
      font: helvetica,
      color: rgb(0.2, 0.25, 0.33),
    });

    tPage.drawText('Full Stack Development Internship', {
      x: 280,
      y: 270,
      size: 17,
      font: helveticaBold,
      color: rgb(0.06, 0.09, 0.16),
    });

    const durationText = 'from 29 June 2026 to 28 July 2026, demonstrating remarkable technical competence and dedication.';
    tPage.drawText(durationText, {
      x: 140,
      y: 235,
      size: 13,
      font: helvetica,
      color: rgb(0.2, 0.25, 0.33),
    });

    // Footer info
    tPage.drawText('Certificate ID: THX-JUN2926-229', {
      x: 60,
      y: 80,
      size: 11,
      font: helveticaBold,
      color: rgb(0.39, 0.45, 0.55),
    });

    tPage.drawText('Status: Successfully Completed', {
      x: 60,
      y: 60,
      size: 10,
      font: helvetica,
      color: rgb(0.16, 0.65, 0.27),
    });

    tPage.drawText('Authorized Signatory', {
      x: 640,
      y: 80,
      size: 12,
      font: helveticaBold,
      color: rgb(0.06, 0.09, 0.16),
    });
    tPage.drawText('Thiranex Technologies', {
      x: 640,
      y: 60,
      size: 10,
      font: helvetica,
      color: rgb(0.39, 0.45, 0.55),
    });

    const thiranexBytes = await thiranexPdf.save();
    fs.writeFileSync(path.join(certsDir, 'Thiranex_Internship_Certificate.pdf'), thiranexBytes);
    console.log('Successfully generated Thiranex_Internship_Certificate.pdf');

    // Generate Prompt Run Certificate PDF
    const prPdf = await PDFDocument.create();
    const prPage = prPdf.addPage([841.89, 595.28]);

    // Border & Background
    prPage.drawRectangle({
      x: 20,
      y: 20,
      width: 801.89,
      height: 555.28,
      borderColor: rgb(0.23, 0.51, 0.96),
      borderWidth: 2,
      color: rgb(0.98, 0.99, 1),
    });

    prPage.drawText('FRONTEND ARENA  x  UNSTOP', {
      x: 280,
      y: 495,
      size: 18,
      font: helveticaBold,
      color: rgb(0.23, 0.51, 0.96),
    });

    prPage.drawText('CERTIFICATE OF PARTICIPATION', {
      x: 215,
      y: 430,
      size: 26,
      font: helveticaBold,
      color: rgb(0.06, 0.09, 0.16),
    });

    prPage.drawText('This is to certify that', {
      x: 360,
      y: 380,
      size: 14,
      font: helvetica,
      color: rgb(0.39, 0.45, 0.55),
    });

    prPage.drawText('Harishkumar L', {
      x: 320,
      y: 325,
      size: 32,
      font: helveticaBold,
      color: rgb(0.14, 0.38, 0.92),
    });

    const prDesc = 'from Karpagam College of Engineering (KCE), Coimbatore, Tamil Nadu';
    prPage.drawText(prDesc, {
      x: 210,
      y: 275,
      size: 13,
      font: helvetica,
      color: rgb(0.2, 0.25, 0.33),
    });

    prPage.drawText('has participated in Prompt Run 2026 organized by Frontend Arena.', {
      x: 220,
      y: 245,
      size: 14,
      font: helveticaBold,
      color: rgb(0.06, 0.09, 0.16),
    });

    prPage.drawText('Event: Prompt Run 2026', {
      x: 60,
      y: 80,
      size: 11,
      font: helveticaBold,
      color: rgb(0.39, 0.45, 0.55),
    });

    prPage.drawText('Frontend Arena', {
      x: 660,
      y: 80,
      size: 12,
      font: helveticaBold,
      color: rgb(0.06, 0.09, 0.16),
    });

    const prBytes = await prPdf.save();
    fs.writeFileSync(path.join(certsDir, 'Prompt_Run_Certificate.pdf'), prBytes);
    console.log('Successfully generated Prompt_Run_Certificate.pdf');

  } catch (err) {
    console.error('Error generating certificates:', err);
  }
}

generateAssets();
