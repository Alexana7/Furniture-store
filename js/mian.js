const infoBtns = document.querySelectorAll('.info-dot');
const infoHints = document.querySelectorAll('.info-hint');

// show hints

for(let btn of infoBtns) {
  btn.addEventListener('click', function(e) {
    e.stopPropagation();
    this.parentNode.querySelector('.info-hint').classList.toggle('none');
  })
};

//closeHints

document.addEventListener('click', () => {
  for(let hint of infoHints) {
    hint.classList.add('none')
  };
});

//stop hoisting click-event when hint clicked

for(let hint of infoHints) {
  hint.addEventListener('click', (e)=> e.stopPropagation());
}

// swiper slider

const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  slidesPerView: 1,
  spaceBetween: 42,
  freeMode: true,

  breakpoints: {
    600: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    920: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
  //   1024: {
  //     slidesPerView: 5,
  //     spaceBetween: 50,
  //   },
    1230: {
          slidesPerView: 4,
          spaceBetween: 42,
        },
  },

  // Navigation arrows
  navigation: {
    nextEl: '#sliderNext',
    prevEl: '#sliderPrev',
  },

});


//tabs

const tabBtns = document.querySelectorAll('[data-tab]');
const tabsProducts = document.querySelectorAll('[data-tab-value]');

for (let btn of tabBtns) {
  btn.addEventListener('click', function() {

    //remove active class for all btns
    for (let btn of tabBtns) {
      btn.classList.remove('tab-controls__btn--active');
    }

    //add active class
    this.classList.add('tab-controls__btn--active');


    // get selected category products
   
    for (let product of tabsProducts) {

      // Get all products on Click

      if (this.dataset.tab === 'all') {
        product.classList.remove('none')

      } else {
        //  Show all products of the selected category
        if (product.dataset.tabValue === this.dataset.tab) {
          product.classList.remove('none')
  
          //  Hide other products
        } else {
          product.classList.add('none')
        }  
      }
    }

    //update swiper
    swiper.update()

  })
}

// mobile-nav

const mobileNavOpenBtn = document.querySelector('#open-mobile-nav-btn');
const mobileNavCloseBtn = document.querySelector('#close-mobile-nav-btn');
const mobileNav = document.querySelector('#mobile-nav');

mobileNavOpenBtn.onclick = function() {
  mobileNav.classList.add('mobile-nav__wrapper--open')
}
mobileNavCloseBtn.onclick = function() {
  mobileNav.classList.remove('mobile-nav__wrapper--open')
}
