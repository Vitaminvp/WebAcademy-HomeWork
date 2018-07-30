const toggle = document.querySelector('.toggle-mnu');
const menuList = document.querySelector('.header__nav_menu');
toggle.addEventListener('click', function (e) {
    if(!toggle.classList.contains('on')){
        toggle.classList.add('on');
        menuList.style.display = 'flex';
    } else {
        toggle.classList.remove('on');
        menuList.style.display = 'none';
    }
    e.preventDefault();
});
