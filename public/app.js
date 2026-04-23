"use strict";
const form = document.querySelector('#loginForm');
const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');
const message = document.querySelector('#message');
if (!form || !emailInput || !passwordInput || !message) {
    throw new Error('Login UI failed to initialize.');
}
form.addEventListener('submit', (event) => {
    event.preventDefault();
    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();
    if (!email || !password) {
        message.textContent = 'Please enter both email and password.';
        message.className = 'message error';
        return;
    }
    message.textContent = `Welcome, ${email}!`;
    message.className = 'message success';
});
