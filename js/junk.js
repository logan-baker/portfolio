// const generateRandomColor = () => {
//   // Generate a random hex color code
//   const r = Math.floor(Math.random() * 256);
//   const g = Math.floor(Math.random() * 256);
//   const b = Math.floor(Math.random() * 256);
//   return `#${r.toString(16).padStart(2, '0')}${g
//     .toString(16)
//     .padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;
    
// };

// const assignRandomColors = () => {
//   const wrappedItems = document.querySelectorAll('.wrapped-item');

//   wrappedItems.forEach((item) => {
//     const randomColor = generateRandomColor()
//     item.style.backgroundColor = randomColor;
//   });
// };

// // Call the function when the page loads
// window.addEventListener('load', assignRandomColors);
let luminance;

const generateRandomColor = () => {
    while (true) {
      // Generate random RGB values
      const r = Math.floor(Math.random() * 256);
      const g = Math.floor(Math.random() * 256);
      const b = Math.floor(Math.random() * 256);
  
      // Calculate luminance (Y) for the color
    luminance =  0.299 * r + 0.587 * g + 0.114 * b;
  
      // Check if the luminance is within the readable range (128-255)
      if (128 <= luminance && luminance <= 255) {
        // Return the RGB representation of the color
        return `rgb(${r}, ${g}, ${b})`;
      }
    }
  };
  
  const assignRandomColors = () => {
    const wrappedItems = document.querySelectorAll('.wrapped-item');
  
    wrappedItems.forEach((item) => {
      const randomColor = generateRandomColor();
      item.style.backgroundColor = randomColor;
  
      // Calculate contrast with white (#FFFFFF)
      const contrastWithWhite = (255 + 0.05) / (luminance + 0.05);
      const textColor = contrastWithWhite >= 4.5 ? '#FFFFFF' : '#000000';
      item.querySelector('p').style.color = textColor;
    });
  };
  
  // Call the function when the page loads
  window.addEventListener('load', assignRandomColors);
  