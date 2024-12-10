
function openModal(modalId) {
  const modal = document.getElementById(modalId);
  modal.style.display = "block"; // Display the modal
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  modal.style.display = "none"; // Hide the modal
}

window.onclick = function(event) {
  const modals = document.querySelectorAll('.modal');
  modals.forEach(modal => {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
};

document.getElementById("contactUsBtn").addEventListener("click", function() {
  openModal('contactModal');
});

document.getElementById('featuresFooterBtn').addEventListener('click', function() {
  openModal('featuresModal');
});

document.getElementById("contactForm").addEventListener("submit", function(event) {
  event.preventDefault();
  alert("Thank you for contacting us! We'll get back to you shortly.");
  closeModal('contactModal'); // close the modal after submission
});

function openBookingModal(modalId) {
  const modal = document.getElementById(modalId);
  modal.style.display = "block"; 
}

document.getElementById('bookingForm').addEventListener('submit', function(event) {
  event.preventDefault(); 
  
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const ticketCount = document.getElementById('ticketCount').value;
  const seatCategory = document.getElementById('seatCategory').value;
  const paymentMethod = document.getElementById('paymentMethod').value;

  alert(`Booking Confirmation:
  Name: ${name}
  Email: ${email}
  Tickets: ${ticketCount} (${seatCategory} seat)
  Payment Method: ${paymentMethod}`);

  closeModal('concertBookingModal');
});

document.getElementById('faqsFooterBtn').addEventListener('click', function() {
  openModal('faqsModal');
});

document.getElementById("pricingFooterBtn").addEventListener("click", function(event) {
  event.preventDefault(); 
  openModal('pricingModal'); 
});

document.addEventListener('DOMContentLoaded', () => {
  const closeButtons = document.querySelectorAll('.close');
  closeButtons.forEach(button => {
    button.addEventListener('click', () => {
      const modal = button.closest('.modal'); 
      modal.style.display = "none";
    });
  });
});
