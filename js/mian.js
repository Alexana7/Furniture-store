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

  slidesPerView: 4,
  spaceBetween: 42,
  freeMode: true,

  // breakpoints: {
  //   640: {
  //     slidesPerView: 2,
  //     spaceBetween: 20,
  //   },
  //   768: {
  //     slidesPerView: 4,
  //     spaceBetween: 40,
  //   },
  //   1024: {
  //     slidesPerView: 5,
  //     spaceBetween: 50,
  //   },
  // },

  // Navigation arrows
  navigation: {
    nextEl: '#sliderNext',
    prevEl: '#sliderPrev',
  },

});