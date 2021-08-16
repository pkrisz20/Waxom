const menubtn = document.querySelector('.toggle-div');
const navUL = document.querySelector('.menubar');
let menuopen = false;

menubtn.addEventListener('click', () => {
    if(!menuopen) {
        menuopen = true;
        menubtn.classList.add('open');
        navUL.classList.add('show');
    }

    else {
        menuopen = false;
        navUL.classList.add('out');
        navUL.classList.remove('show');
        menubtn.classList.remove('open');

        setTimeout(() => {
            navUL.classList.remove('out');
        }, 600);
    }
});