const sliders = document.querySelectorAll('.slider');
const sliders2 = document.querySelectorAll('.slider2');
const btnPrev = document.getElementById('prev-button');
const btnNext = document.getElementById('next-button');


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




