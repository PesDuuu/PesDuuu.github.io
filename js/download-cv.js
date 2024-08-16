document.addEventListener('DOMContentLoaded', function () {
  const downloadButton = document.getElementById('download-cv');

  downloadButton.addEventListener('click', function () {
    // Hidden file URL
    const fileUrl = 'assests/CV_NguyenPhamHuuDu.pdf';

    // Create a temporary anchor element
    const tempLink = document.createElement('a');
    tempLink.href = fileUrl;
    tempLink.download = 'CV_NguyenPhamHuuDu.pdf';

    // Append the anchor to the body and trigger a click
    document.body.appendChild(tempLink);
    tempLink.click();

    // Remove the anchor from the body
    document.body.removeChild(tempLink);
  });
});
