document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('.header');
    const loginContainer = document.querySelector('.login-container');

    setTimeout(() => {
        header.style.left = '0';
        loginContainer.style.left = '0';
    }, 100);
});
