const sliders = document.querySelectorAll('.slider');
const sliders2 = document.querySelectorAll('.slider2');
const btnPrev = document.getElementById('prev-button');
const btnNext = document.getElementById('next-button');
const button = document.querySelector('.click-to-copy');

let currentSlide = 0;

function hideSlider() {
    sliders.forEach(item => item.classList.remove('on'));
}

function showSlider() {
    sliders[currentSlide].classList.add('on');
}


function hideSlider2() {
    sliders2.forEach(item => item.classList.remove('on'));
}

function showSlide2() {
    sliders2[currentSlide].classList.add('on');
}


function nextSlider() {
    hideSlider();
    if (currentSlide === sliders.length - 1) {
        currentSlide = 0;
    } else {
        currentSlide++;
    }
    showSlider();
}

function prevSlider() {
    hideSlider();
    if (currentSlide === 0) {
        currentSlide = sliders.length - 1;
    } else {
        currentSlide--;
    }
    showSlider();
}

function nextSlider2() {
    hideSlide2();
    if (currentSlide === sliders2.length - 1) {
        currentSlide = 0;
    } else {
        currentSlide++;
    }
    showSlider2();
}

function prevSlider2() {
    hideSlider2();
    if (currentSlide === 0) {
        currentSlide = sliders2.length - 1;
    } else {
        currentSlide--;
    }
    showSlider2();
}

btnPrev.addEventListener('click', prevSlider);
btnNext.addEventListener('click', nextSlider);








const clickToCopy = (e) => {
  e.preventDefault();
  copyToClipboard(e.currentTarget.textContent);
  e.target.classList.add('is-copied');
  setTimeout(() => { e.target.classList.remove('is-copied') }, 1200);
}


const copyToClipboard = (str) => {
  const el = document.createElement('textarea');
  el.value = str;
  el.setAttribute('readonly', '');
  el.style.position = 'absolute';
  el.style.left = '-9999px';
  document.body.appendChild(el);
  const selected =
    document.getSelection().rangeCount > 0 
      ? document.getSelection().getRangeAt(0)
      : false;
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);
  if (selected) {
    document.getSelection().removeAllRanges();
    document.getSelection().addRange(selected);
  }
}

button.addEventListener('click', clickToCopy);