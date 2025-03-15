const sliders = document.querySelectorAll('.slider');
const sliders2 = document.querySelectorAll('.slider2');
const btnPrev = document.getElementById('prev-button');
const btnNext = document.getElementById('next-button');
const btnPrev2 = document.getElementById('prev-button2');
const btnNext2 = document.getElementById('next-button2');
const btnPrev3 = document.getElementById('prev-button3');
const btnNext3 = document.getElementById('next-button3');

let currentSlide = 0;

let currentSlide2 = 0;

let currentSlide3 = 0;

function hideSlider() {
    sliders.forEach(item => item.classList.remove('on'));
}

function showSlider() {
    sliders[currentSlide].classList.add('on');
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


btnPrev.addEventListener('click', prevSlider);
btnNext.addEventListener('click', nextSlider);


function hideSlider2() {
    sliders2.forEach(item => item.classList.remove('on'));
}

function showSlide2() {
    sliders2[currentSlide2].classList.add('on');
}


function nextSlider2() {
    hideSlide2();
    if (currentSlide2 === sliders2.length - 1) {
        currentSlide2 = 0;
    } else {
        currentSlide2++;
    }
    showSlider2();
}

function prevSlider2() {
    hideSlider2();
    if (currentSlide2 === 0) {
        currentSlide2 = sliders2.length - 1;
    } else {
        currentSlide2--;
    }
    showSlider2();
}


btnPrev2.addEventListener('click', prevSlider2);
btnNext2.addEventListener('click', nextSlider2);


function nextSlider3() {
    hideSlide2();
    if (currentSlide === sliders2.length - 1) {
        currentSlide = 0;
    } else {
        currentSlide++;
    }
    showSlider3();
}

function prevSlider3() {
    hideSlider3();
    if (currentSlide === 0) {
        currentSlide = sliders2.length - 1;
    } else {
        currentSlide--;
    }
    showSlider3();
}

btnPrev3.addEventListener('click', prevSlider3);
btnNext3.addEventListener('click', nextSlider3);



