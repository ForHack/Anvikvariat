let burger = document.querySelector('.burger');
burger.addEventListener('click', () => {
    let menu = document.querySelector('.nav ul');
    menu.classList.toggle('show-menu');
    burger.classList.toggle('onRotate');
});