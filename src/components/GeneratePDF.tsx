import React from 'react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

const GeneratePDF = () => {
  const downloadPdf = async () => {
    const input = document.getElementById('content');
    const canvas = await html2canvas(input!);
    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF();
    pdf.addImage(imgData, 'PNG', 10, 10);
    pdf.save('download.pdf');
  };

  return (
    <div>
      <div id="content">
        {/* Content to convert into PDF */}
        <h1>This is content that will be in PDF</h1>
        <p>Your text here...</p>
      </div>
      <button onClick={downloadPdf} className="bg-blue-500 text-white p-2">Download PDF</button>
    </div>
  );
};

export default GeneratePDF;
