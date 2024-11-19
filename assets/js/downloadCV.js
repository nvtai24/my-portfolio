document.addEventListener("DOMContentLoaded", () => {
  const downloadButton = document.querySelector("#download-cv");

  // const link = document.createElement('a');
  // link.href = 'assets/files/CV_NVTai.pdf';
  // link.download = 'CV_NVTai.pdf';
  // link.click();

  if (downloadButton) {
    downloadButton.addEventListener("click", (e) => {
      e.preventDefault(); // Ngăn hành động mặc định
      alert(
        "Oops! The CV is currently unavailable. \nPlease try again later ^^"
      );
    });
  }
});
