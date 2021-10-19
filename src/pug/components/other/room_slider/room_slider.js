import './room_slider.scss';

import '../../../../../node_modules/slick-carousel/slick/slick.min'
import '../../../../../node_modules/slick-carousel/slick/slick.css'

let sliders = document.querySelectorAll('.room-slider')

sliders.forEach( slider => {
    let imageContainer = slider.querySelector('.room-slider__slider');
    let imageUrls = slider.dataset.imageurls
    imageUrls = imageUrls.split(', ')
    imageUrls.forEach(url => {
        let img = document.createElement('img');
        img.src = url;
        imageContainer.appendChild(img);
    })
})

$('.room-slider__slider').each(function (i) {
    this.id = "room-slider__slider-" + i


    let idSelector = "#" + this.id;
    let nextArrowSelector = idSelector + ' .room-slider__slider-btn--next';
    let dots = $(idSelector).parent().find('.room-slider__slider-dots')[0]
    let btnPrev = $(idSelector).parent().find('.room-slider__slider-btn--prev')[0]
    let btnNext = $(idSelector).parent().find('.room-slider__slider-btn--next')[0]


    $(idSelector).slick({
        nextArrow: btnNext,
        prevArrow: btnPrev,
        dots: true,
        infinite: true,
        arrows: true,
        appendDots: dots
    })
})



console.log('%c slider script is working', 'color: green')