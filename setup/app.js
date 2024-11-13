// Function to toggle dark mode
function toggleTheme() {
  document.body.classList.toggle('dark-mode');
}

// Function to generate Lorem Ipsum text
document.querySelector('.lorem-form').addEventListener('submit', function(event) {
  event.preventDefault();
  
  // Get the amount of paragraphs from the input
  const amount = document.getElementById('amount').value || 5;
  
  // Get the selected font, color, and size from the dropdowns
  const selectedFont = document.getElementById('font').value;
  const selectedColor = document.getElementById('color').value;
  const selectedSize = document.getElementById('size').value;
  
  const loremText = generateLoremIpsum(amount);
  
  // Display the Lorem Ipsum text
  const loremElement = document.querySelector('.lorem-text');
  
  // Set the font family, color, and size of the lorem text
  loremElement.style.fontFamily = selectedFont;
  loremElement.style.color = selectedColor;
  loremElement.style.fontSize = selectedSize;
  
  // Add the generated text
  loremElement.innerHTML = loremText;
});

// Function to generate Lorem Ipsum text
function generateLoremIpsum(paragraphCount) {
  const lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.";
  
  let result = '';
  
  for (let i = 0; i < paragraphCount; i++) {
    result += `<p>${lorem}</p>`;
  }
  
  return result;
}

// Function to toggle the custom form visibility
function toggleCustomForm() {
  const customForm = document.getElementById('custom-form');
  customForm.style.display = customForm.style.display === 'none' ? 'block' : 'none';
}

// Function to generate a custom sentence
function generateCustomSentence() {
  const customText = document.getElementById('custom-sentence').value.trim();
  
  if (customText) {
    const selectedFont = document.getElementById('font').value;
    const selectedColor = document.getElementById('color').value;
    const selectedSize = document.getElementById('size').value;
    
    const customElement = document.querySelector('.custom-text');
    
    // Set the font, color, and size for the custom sentence
    customElement.style.fontFamily = selectedFont;
    customElement.style.color = selectedColor;
    customElement.style.fontSize = selectedSize;
    
    // Display the custom sentence
    customElement.innerHTML = `<p>${customText}</p>`;
    
    // Hide the custom form after submission
    document.getElementById('custom-form').style.display = 'none';
  } else {
    alert('Please enter a sentence!');
  }
}
