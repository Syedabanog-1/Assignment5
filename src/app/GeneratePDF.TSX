'use client'
import React from 'react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

const GeneratePDF = () => {
  const downloadPdf = async () => {
    const input = document.getElementById('content');
    if (!input) return; 

    const canvas = await html2canvas(input, { useCORS: true });
    const imgData = canvas.toDataURL('image/png');

    const pdf = new jsPDF({
      orientation: 'portrait',
      unit: 'px',
      format: 'a4', 
    });

    const pageWidth = pdf.internal.pageSize.getWidth();
    const pageHeight = pdf.internal.pageSize.getHeight();
    const imgWidth = canvas.width;
    const imgHeight = canvas.height;

    const ratio = Math.min(pageWidth / imgWidth, pageHeight / imgHeight);
    const scaledWidth = imgWidth * ratio;
    const scaledHeight = imgHeight * ratio;

    pdf.addImage(imgData, 'PNG', 10, 10, scaledWidth, scaledHeight);
    pdf.save('download.pdf');
  };

  return (
    <div>
      <div id="content" style={{ padding: '10px', border: '1px solid #ddd' }}>

        <h1>This is content that will be in PDF</h1>
        <p>Hello! This is Syeda rom Governor Initiative IT program AI, WEB 3.0 , META VERSE</p>
      </div>
      <button onClick={downloadPdf} className="bg-blue-500 text-white p-2 mt-4">
        Download PDF
      </button>
    </div>
  );
};

export default GeneratePDF;
