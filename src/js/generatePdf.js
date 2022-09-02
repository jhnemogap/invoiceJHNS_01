let docPdf = null;

const $billNumb = document.getElementById('input-bill-numb');

const $btnPreviewPdf = document.getElementById('preview-pdf');
const $btnDownloadPdf = document.getElementById('download-pdf');
const $framePreviewPdf = document.getElementById('frame-to-preview-pdf');

$btnPreviewPdf.addEventListener('click', () => {
  previewPDF();
});

$btnDownloadPdf.addEventListener('click', () => {
  downloadPDF();
});

function generatePDF() {
  if (!docPdf) {
    const jsPDF = window.jspdf.jsPDF;
    docPdf = new jsPDF({
      unit: 'cm',
      format: [19.9, 22.0],
    });
  }

  docPdf.setFontSize(40);
  docPdf.text($billNumb.value, 2.0, 3.0);
}

function previewPDF() {
  generatePDF();
  $framePreviewPdf.src = docPdf.output("bloburl");
}

function downloadPDF() {
  generatePDF();
  docPdf.save(`invoice-test-${Date.now()}.pdf`);
}
