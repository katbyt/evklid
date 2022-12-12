// swiper
const swiper = new Swiper('.hero__container', {
  loop: true,

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});


// tabs
document.querySelectorAll('.work__item--btn').forEach(function(tabsBtn) {
  tabsBtn.addEventListener('click', function(e) {
    const path = e.currentTarget.dataset.path;

    document.querySelectorAll('.work__item--btn').forEach(function(btn) {
      btn.classList.remove('work__item--btn--active')
    });

    e.currentTarget.classList.add('work__item--btn--active');

    document.querySelectorAll('.work__block').forEach(function(tabsBtn) {
      tabsBtn.classList.remove('work__block--active')
    });

    document.querySelector(`[data-target="${path}"]`).classList.add('work__block--active');
  });
});


// accordion
$(".accordion").accordion({
  heightStyle: "content",
  active: 'none'
});


// burger
let burger = document.querySelector('.burger');
let menu = document.querySelector('.header__nav');
let menuLinks = menu.querySelectorAll('.nav__link');

burger.addEventListener('click',
function () {
  burger.classList.toggle('burger--active');
  menu.classList.toggle('header__nav--active');
  document.body.classList.toggle('stop-scroll');
})

menuLinks.forEach(function (el) {
  el.addEventListener('click', function () {
    burger.classList.remove('burger--active');
    menu.classList.remove('header__nav--active');
    document.body.classList.remove('stop-scroll')
  })
})


// search_form
let search = document.querySelector('.header__btn');
let closed_search = document.querySelector('.closed_search');
let input = document.querySelector('.header__form--wrapper');

search.addEventListener('click', function() {
  input.classList.add('header__form--wrapper--active');
});

closed_search.addEventListener('click', function() {
  input.classList.remove('header__form--wrapper--active');
});
