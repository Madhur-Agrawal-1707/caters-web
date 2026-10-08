import { jsPDF } from "jspdf";
import fs from "fs";
import path from "path";
import { menuCategories, allMenuItems } from "../src/data/menu";

async function generatePdf() {
  const doc = new jsPDF();
  let y = 20;

  doc.setFontSize(22);
  doc.text("PS Caterers - Curated Menu", 20, y);
  y += 15;

  for (const category of menuCategories) {
    const items = allMenuItems.filter(item => item.category === category.id);
    if (items.length === 0) continue;

    if (y > 270) {
      doc.addPage();
      y = 20;
    }

    doc.setFontSize(16);
    doc.setTextColor(252, 128, 25); // Primary color
    doc.text(category.label, 20, y);
    y += 10;

    doc.setFontSize(12);
    doc.setTextColor(0, 0, 0);

    for (const item of items) {
      if (y > 280) {
        doc.addPage();
        y = 20;
      }
      doc.text(`• ${item.name}`, 25, y);
      y += 7;
    }
    y += 5;
  }

  const outPath = path.join(process.cwd(), "public", "PS-Caterers-Menu.pdf");
  const pdfBuffer = doc.output('arraybuffer');
  fs.writeFileSync(outPath, Buffer.from(pdfBuffer));
  console.log("PDF generated at", outPath);
}

generatePdf();
