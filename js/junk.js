// let luminance;

// const generateRandomColor = () => {
//   while (true) {
//     // Generate random RGB values
//     const r = Math.floor(Math.random() * 256);
//     const g = Math.floor(Math.random() * 256);
//     const b = Math.floor(Math.random() * 256);

//     // Calculate luminance (Y) for the color
//     luminance = 0.299 * r + 0.587 * g + 0.114 * b;

//     // Check if the luminance is within the readable range (128-255)
//     if (128 <= luminance && luminance <= 255) {
//       // Return the RGB representation of the color
//       return `rgb(${r}, ${g}, ${b})`;
//     }
//   }
// };

// const assignRandomColors = () => {
//   const wrappedItems = document.querySelectorAll('.wrapped-item');

//   wrappedItems.forEach((item) => {
//     const randomColor = generateRandomColor();
//     item.style.backgroundColor = randomColor;

//     // Calculate contrast with white (#FFFFFF)
//     const contrastWithWhite = (255 + 0.05) / (luminance + 0.05);
//     const textColor = contrastWithWhite >= 4.5 ? '#FFFFFF' : '#000000';
//     item.querySelector('p').style.color = textColor;
//   });
// };

// // Call the function when the page loads
// window.addEventListener('load', assignRandomColors);

// Improved via Aitrium

// const MAX_RGB_VALUE = 256;
// const MIN_READABLE_LUMINANCE = 128;
// const MAX_READABLE_LUMINANCE = 255;
// const MAX_CONTRAST_RATIO = 4.5; // WCAG recommended minimum contrast ratio for small text

// const generateRandomValue = () => {
//   return Math.floor(Math.random() * MAX_RGB_VALUE);
// };

// const calculateLuminance = (r, g, b) => {
//   return 0.299 * r + 0.587 * g + 0.114 * b;
// };

// const generateRandomColor = () => {
//   const r = generateRandomValue();
//   const g = generateRandomValue();
//   const b = generateRandomValue();
//   return { r, g, b, color: `rgb(${r}, ${g}, ${b})` };
// };

// const getTextContrastColor = (luminance) => {
//   const contrastWithWhite = (255 + 0.05) / (luminance + 0.05);
//   return contrastWithWhite >= MAX_CONTRAST_RATIO ? '#FFFFFF' : '#000000';
// };

// const assignRandomColors = () => {
//   const wrappedItems = document.querySelectorAll('.wrapped-item');

//   wrappedItems.forEach((item) => {
//     let randomColor;
//     let textColor;
//     let luminance;

//     do {
//       randomColor = generateRandomColor();
//       luminance = calculateLuminance(randomColor.r, randomColor.g, randomColor.b);
//     } while (!(MIN_READABLE_LUMINANCE <= luminance && luminance <= MAX_READABLE_LUMINANCE));

//     item.style.backgroundColor = randomColor.color;

//     textColor = getTextContrastColor(luminance);
//     item.querySelector('p').style.color = textColor;
//   });
// };

// window.addEventListener('load', assignRandomColors);

// The above code optimizes the random color generation functionality by not just aiming for a luminance that happens to be between 128 and 255 but also considering the contrast between the background color and the text color. 
// It splits responsibilities into more specific functions, improving readability and modularity.




// Even further Improvement


const generateRandomValue = () => {
    return Math.floor(Math.random() * 256);
  };
  
  const generateRandomColor = () => {
    const r = generateRandomValue();
    const g = generateRandomValue();
    const b = generateRandomValue();
    return `rgb(${r}, ${g}, ${b})`;
  };
  
  const calculateLuminance = (r, g, b) => {
    return (0.299 * r) + (0.587 * g) + (0.114 * b);
  };
  
  const getContrastYIQ = (rgbColor) => {
    const rgbComponents = rgbColor
      .substring(4, rgbColor.length - 1)
      .replace(/ /g, '')
      .split(',');
  
    const r = parseInt(rgbComponents[0]);
    const g = parseInt(rgbComponents[1]);
    const b = parseInt(rgbComponents[2]);
    const luminance = calculateLuminance(r, g, b);
  
    return luminance < 140 ? '#FFFFFF' : '#000000'; // Text color based on YIQ contrast
  };
  
  const assignRandomColors = () => {
    const wrappedItems = document.querySelectorAll('.wrapped-item');
    
    wrappedItems.forEach((item) => {
      const randomColor = generateRandomColor();
      item.style.backgroundColor = randomColor;
  
      const textColor = getContrastYIQ(randomColor);
      item.querySelector('p').style.color = textColor;
    });
  };
  
  window.addEventListener('load', assignRandomColors);
  