// Script principal: validation formulaire, thème, navigation mobile, retour en haut

// Theme toggle + persistance
const themeToggle = document.getElementById('themeToggle');
const root = document.documentElement;
const preferred = localStorage.getItem('theme') || (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
if(preferred === 'dark') document.documentElement.setAttribute('data-theme','dark');
else document.documentElement.removeAttribute('data-theme');

themeToggle.addEventListener('click', () => {
  const current = document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
  if(current === 'dark') {
    document.documentElement.removeAttribute('data-theme');
    localStorage.setItem('theme','light');
  } else {
    document.documentElement.setAttribute('data-theme','dark');
    localStorage.setItem('theme','dark');
  }
});

// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const mainNav = document.getElementById('mainNav');
navToggle.addEventListener('click', () => {
  if(mainNav.style.display === 'flex') mainNav.style.display = 'none';
  else mainNav.style.display = 'flex';
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', function(e){
    const href = this.getAttribute('href');
    if(href.length>1){
      e.preventDefault();
      const target = document.querySelector(href);
      if(target) target.scrollIntoView({behavior:'smooth', block:'start'});
      if(window.innerWidth < 900) mainNav.style.display = 'none';
    }
  });
});

// Back to top button
const backToTop = document.getElementById('backToTop');
window.addEventListener('scroll', () => {
  if(window.scrollY > 300) backToTop.style.display = 'block';
  else backToTop.style.display = 'none';
});
backToTop.addEventListener('click', () => window.scrollTo({top:0, behavior:'smooth'}));

// Form validation simple
const form = document.getElementById('contactForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');
const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const messageError = document.getElementById('messageError');
const formSuccess = document.getElementById('formSuccess');

function validateEmail(email) {
  // simple regex
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

form.addEventListener('submit', function(e){
  e.preventDefault();
  let valid = true;
  nameError.textContent = '';
  emailError.textContent = '';
  messageError.textContent = '';
  formSuccess.textContent = '';

  if(!nameInput.value || nameInput.value.trim().length < 2){
    nameError.textContent = 'Veuillez saisir un nom (2 caractères min).';
    valid = false;
  }
  if(!emailInput.value || !validateEmail(emailInput.value)){
    emailError.textContent = 'Veuillez saisir un email valide.';
    valid = false;
  }
  if(!messageInput.value || messageInput.value.trim().length < 10){
    messageError.textContent = 'Le message doit contenir au moins 10 caractères.';
    valid = false;
  }

  if(valid){
    // Simuler envoi
    formSuccess.textContent = 'Message envoyé ! Merci — nous vous répondrons bientôt.';
    form.reset();
    // Clear after 5s
    setTimeout(()=> formSuccess.textContent = '', 5000);
  }
});

// Fill year in footer
document.getElementById('year').textContent = new Date().getFullYear();