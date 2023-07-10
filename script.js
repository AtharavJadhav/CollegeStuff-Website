// JavaScript code
const sidebar = document.getElementById('sidebar');

const emailInput = document.getElementById('email-input');
const submitButton = document.getElementById('submit-btn');

submitButton.addEventListener('click', function() {
  const email = emailInput.value;
  if (validateEmail(email)) {
    saveEmailToGoogleSheets(email);
    emailInput.value = ''; // Clear the input field
    alert('Email submitted successfully! Thank you.');
  } else {
    alert('Please enter a valid email address.');
  }
});

function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function saveEmailToGoogleSheets(email) {
  fetch('https://script.google.com/macros/s/AKfycbwDVDzubM7yWbMC4TnekWzRXPFLJWGOw4xMJGdihEZTPcr_Q9dWK1Lsqvj_16lqgZPz/exec', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ 'Email': email })
  })
  .then(response => {
    if (response.ok) {
      console.log('Email submitted:', email);
    } else {
      console.error('Error:', response.statusText);
    }
  })
  .catch(error => {
    console.error('Error:', error);
  });
}


function toggleSidebar() {
  var sidebar = document.querySelector('.sidebar');
  var sidebarList = document.querySelector('.sidebar-list');

  if (sidebar.classList.contains('open')) {
    sidebarList.style.right = '0';
  } else {
    sidebarList.style.right = '-200px';
  }

  sidebar.classList.toggle('open');
}

const joinButton = document.querySelector('.join-button');

joinButton.addEventListener('click', function(event) {
  event.preventDefault(); // Prevent the default behavior of the link

  // Replace "https://example.com/whatsapp-group-link" with the actual WhatsApp group link
  const whatsappGroupLink = 'https://chat.whatsapp.com/Bstc0iolqKQ7YiUdL6O69S';

  // Open the WhatsApp group link in a new tab/window
  window.open(whatsappGroupLink, '_blank');
});
