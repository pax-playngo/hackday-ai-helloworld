const form = document.querySelector<HTMLFormElement>('#loginForm');
const emailInput = document.querySelector<HTMLInputElement>('#email');
const passwordInput = document.querySelector<HTMLInputElement>('#password');
const message = document.querySelector<HTMLParagraphElement>('#message');

if (!form || !emailInput || !passwordInput || !message) {
  throw new Error('Login UI failed to initialize: required DOM elements not found.');
}

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const email = emailInput.value.trim();
  const password = passwordInput.value.trim();

  if (!email) {
    message.textContent = 'Please enter your email.';
    message.className = 'message error';
    return;
  }

  if (!emailInput.validity.valid) {
    message.textContent = 'Please enter a valid email address.';
    message.className = 'message error';
    return;
  }

  if (!password) {
    message.textContent = 'Please enter your password.';
    message.className = 'message error';
    return;
  }

  message.textContent = `Welcome, ${email}!`;
  message.className = 'message success';
});
