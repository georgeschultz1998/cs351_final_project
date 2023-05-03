// Contact JS
document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('#ContactSection form');
    form.addEventListener('submit', function(event) {
      const nameInput = document.querySelector('#name');
      const emailInput = document.querySelector('#email');
      const subjectInput = document.querySelector('#subject');
      const messageInput = document.querySelector('#message');
  
      // Create an array to store the names of missing fields
      const missingFields = [];
  
      // Check each field and add the field name to the array if it's missing
      if (!nameInput.value) {
        missingFields.push('Name');
      }
      if (!emailInput.value) {
        missingFields.push('Email');
      }
      if (!subjectInput.value) {
        missingFields.push('Subject');
      }
      if (!messageInput.value) {
        missingFields.push('Message');
      }
  
      // If there are any missing fields, show an alert and prevent form submission
      if (missingFields.length > 0) {
        // Convert the array of missing fields into a comma-separated string
        const missingFieldsStr = missingFields.join(', ');
        alert('Please fill in the following required fields: ' + missingFieldsStr);
        event.preventDefault();
      }
    });
  });
  

  // Resume JS Code
  document.addEventListener('DOMContentLoaded', function() {
    const downloadButton = document.getElementById('downloadButton');
    const resumeUrl = 'images/AnthonySchultzResume.pdf';
    downloadButton.addEventListener('click', function(event) {
      event.preventDefault(); 
      console.log('Download button clicked');
      window.location.href = resumeUrl;
    });
  });
  

  //portfolio js
document.addEventListener('DOMContentLoaded', function() {
    // Select all images with the class "portfolio-image"
    const portfolioImages = document.querySelectorAll('.portfolio-image');
  
    // Add a click event listener to each image
    portfolioImages.forEach(function(image) {
      image.addEventListener('click', function() {
        // Create an overlay element
        const overlay = document.createElement('div');
        overlay.style.position = 'fixed';
        overlay.style.top = '0';
        overlay.style.left = '0';
        overlay.style.width = '100%';
        overlay.style.height = '100%';
        overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
        overlay.style.display = 'flex';
        overlay.style.alignItems = 'center';
        overlay.style.justifyContent = 'center';
        overlay.style.cursor = 'pointer';
        overlay.style.zIndex = '1000';
  
        // Create an image element for the overlay
        const overlayImage = document.createElement('img');
        overlayImage.src = image.src;
        overlayImage.style.maxWidth = '90%';
        overlayImage.style.maxHeight = '90%';
  
        // Append the image to the overlay
        overlay.appendChild(overlayImage);
  
        // Append the overlay to the body
        document.body.appendChild(overlay);
  
        // Add a click event listener to the overlay to close it
        overlay.addEventListener('click', function() {
          document.body.removeChild(overlay);
        });
      });
    });
  });
  
// logo script
document.addEventListener('DOMContentLoaded', function() {
  // Select all images with the class "logo"
  const logoImages = document.querySelectorAll('.logo');

  // Add a click event listener to each image
  logoImages.forEach(function(logoImage) {
    logoImage.addEventListener('click', function() {
      // Toggle the "spin-animation" class
      logoImage.classList.toggle('spin-animation');
    });
  });
});