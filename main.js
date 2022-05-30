// FIRST NAME 
const firstInput = document.getElementById('firstName');
const firstError = document.getElementById('firstNameError');

form.addEventListener('submit', (e) => {
  if (firstInput.value === '') {
    firstError.style.display = 'block';
    firstInput.classList.add('red-border');
    e.preventDefault();
  } else {
    firstError.style.display = 'none';
    firstInput.classList.remove('red-border');
  }
})

// LAST NAME 
const lastInput = document.getElementById('lastName');
const lastError = document.getElementById('lastNameError');

form.addEventListener('submit', (e) => {
  if (lastInput.value === '') {
    lastError.style.display = 'block';
    lastInput.classList.add('red-border');
    e.preventDefault();
  } else {
    lastError.style.display = 'none';
    lastInput.classList.remove('red-border');
  }
})

// EMAIL NAME 
const emailMatch = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const email = document.getElementById('email');
const emailError = document.getElementById('emailError');

form.addEventListener('submit', (e) => {
  if (email.value.match(emailMatch)) {
    emailError.style.display = 'none';
    email.classList.remove('red-border');
  } else {
    emailError.style.display = 'block';
    email.placeholder = 'email@example.com';
    email.classList.add('email-placeholder');
    email.classList.add('red-border');
    e.preventDefault();
  }
})

// PASSWORD NAME 
const password = document.getElementById('password');
const passwordError = document.getElementById('passwordError');

form.addEventListener('submit', (e) => {
  if (password.value === '') {
    passwordError.style.display = 'block';
    password.classList.add('red-border');
    e.preventDefault();
  } else {
    passwordError.style.display = 'none';
    password.classList.remove('red-border');
  }
})







