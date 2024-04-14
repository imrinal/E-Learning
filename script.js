const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});

const closeButton = document.getElementById('closeButton');
const loginForm = document.getElementById('loginForm');

closeButton.addEventListener('click', () => {
    window.location.href = 'home.html'; 
});
