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