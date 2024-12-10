let currentIndex = 0;

function moveSlide(step) {
  const slides = document.querySelectorAll('.carousel-images img');
  const totalSlides = slides.length;

  currentIndex += step;

  if (currentIndex < 0) {
    currentIndex = totalSlides - 1; 
  } else if (currentIndex >= totalSlides) {
    currentIndex = 0; 
  }

  const slideWidth = slides[0].clientWidth;  
  const newTransformValue = -currentIndex * slideWidth;
  document.querySelector('.carousel-images').style.transform = `translateX(${newTransformValue}px)`;
}

setInterval(() => {
  moveSlide(1); 
}, 5000);

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
  closeModal('contactModal'); 
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