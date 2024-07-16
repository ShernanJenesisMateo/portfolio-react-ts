export const setFontColorBasedOnBrightness = (event: React.SyntheticEvent<HTMLImageElement, Event>) => {
  const img = event.target as HTMLImageElement;
  const canvas = document.createElement('canvas');
  const context = canvas.getContext('2d');

  if (!context) return;

  // Set canvas dimensions to match the image
  canvas.width = img.width;
  canvas.height = img.height;

  // Draw the image onto the canvas
  context.drawImage(img, 0, 0, img.width, img.height);

  // Get image data
  const imageData = context.getImageData(0, 0, img.width, img.height);
  const data = imageData.data;

  let r, g, b, avg;
  let colorSum = 0;

  // Loop through all the pixels
  for (let x = 0, len = data.length; x < len; x += 4) {
    r = data[x];
    g = data[x + 1];
    b = data[x + 2];

    // Calculate the average brightness of the pixel
    avg = Math.floor((r + g + b) / 3);
    colorSum += avg;
  }

  // Calculate the average brightness of the image
  const brightness = Math.floor(colorSum / (img.width * img.height));

  // Set the font color based on the brightness
  const textColor = brightness > 128 ? 'black' : 'white';
  const textElement = document.getElementById(`text-${img.id.split('-')[1]}`);
  if (textElement) {
    textElement.style.color = textColor;
  }
};