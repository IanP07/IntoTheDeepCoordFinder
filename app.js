const canvas = document.getElementById('fieldCanvas');
const ctx = canvas.getContext('2d');
const img = new Image();
img.src = 'field.png';  // Change this if the image is named differently or in another directory

const fieldWidthCm = 365.76;  // Change this to the actual width of the field in cm
let scaleFactor;

// Load the image and set up canvas dimensions
img.onload = function() {
    canvas.width = img.width;
    canvas.height = img.height;
    scaleFactor = -fieldWidthCm / canvas.width;  // Calculate scale factor (cm per pixel)
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);  // Draw image on the canvas
};

// Mouse movement event to calculate and display coordinates
canvas.addEventListener('mousemove', function(event) {
    const rect = canvas.getBoundingClientRect();
    const x = event.clientX - rect.left - canvas.width / 2;  // Calculate x relative to center
    const y = -(event.clientY - rect.top - canvas.height / 2);  // Invert y to match field coordinates
    const xCm = (x * scaleFactor).toFixed(2);
    const yCm = (y * scaleFactor).toFixed(2) * -1;
    document.getElementById('coordinates').innerText = `X: ${yCm}, Y: ${xCm}`;
});
