const slider = document.querySelector('.slider');
const btnPrev = documentElementById('prev-button');
const nextPrev = documentElementById('next-button');

let currentSlide = 0;

function hideSlider() {
    slider.forEach(item => item.classList.remove('on'));
}


function showSlider() {
    slider[currentSlide].classList.add('on');
}

function nextSlider() {
    hideSlider()
    if(currentSlide == slider.length -1) {
        currentSlide = 0;
    } else {
        currentSlide++
    }
    showSlider();
}

function prevSlider() {
    hideSlider();
    if(currentSlide == 0) {
        currentSlide = slider.length -1;
    } else {
        currentSlide--
    }
    showSlider();
}

btnPrev.addEventListener('click', () => console.log('clicado'));
btnNext.addEventListener('click', () => console.log('clicado'));