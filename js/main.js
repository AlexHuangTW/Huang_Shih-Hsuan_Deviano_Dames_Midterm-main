let menu_hamburger = document.querySelector('.mobile-hamburger'),
    mobile_menu = document.querySelector('.mobile-nav');

menu_hamburger.addEventListener('click', function() {
    menu_hamburger.classList.toggle('is-active');
    mobile_menu.classList.toggle('is-active');
    console.log('hamburger btn works');
});
