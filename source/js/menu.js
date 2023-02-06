let navMain = document.querySelector('.main-nav__dropdown');
let navClose = document.querySelector('.main-nav__close');
let navOpen = document.querySelector('.main-nav__open');

navMain.classList.add('main-nav__dropdown--hide');
navOpen.classList.add('main-nav__open--open');
navClose.classList.add('main-nav__close--hide')

navOpen.addEventListener('click', function () {
    if (navMain.classList.contains('main-nav__dropdown--hide')) {
      navMain.classList.remove('main-nav__dropdown--hide');
      navMain.classList.add('main-nav__dropdown--open')
  } else {
      navMain.classList.add('main-nav__dropdown--hide');
      navMain.classList.remove('main-nav__dropdown--open');
  }
    if (navOpen.classList.contains('main-nav__open--open')) {
      navOpen.classList.remove('main-nav__open--open');
      navOpen.classList.add('main-nav__open--hide');
  }
    if (navClose.classList.contains('main-nav__close--hide')) {
      navClose.classList.remove('main-nav__close--hide');
      navClose.classList.add('main-nav__close--open');
  }
});

navClose.addEventListener('click', function () {
  if (navMain.classList.contains('main-nav__dropdown--hide')) {
      navMain.classList.remove('main-nav__dropdown--hide');
      navMain.classList.add('main-nav__dropdown--open')
  } else {
      navMain.classList.add('main-nav__dropdown--hide');
      navMain.classList.remove('main-nav__dropdown--open');
  }
  if (navClose.classList.contains('main-nav__close--open')) {
    navClose.classList.remove('main-nav__close--open');
    navClose.classList.add('main-nav__close--hide');
  }
  if (navOpen.classList.contains('main-nav__open--hide')) {
    navOpen.classList.remove('main-nav__open--hide');
    navOpen.classList.add('main-nav__open--open');
}
});


