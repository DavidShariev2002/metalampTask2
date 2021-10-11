import './range_line.scss';

function mousemove(event) {
    let box = this.getBoundingClientRect();
    let pointOffset = +event.clientX - +box.left;

    let point = this.querySelector('.active-point');
    let pointType = point.classList.contains('range__slider-point--left') ? 'left' : 'right';
    
    let unactivePoint; //неактивная точка

    if (pointType === 'left') {
        unactivePoint = this.querySelector('.range__slider-point--right');
    } else if (pointType === 'right') {
        unactivePoint = this.querySelector('.range__slider-point--left');
    }

    if (pointOffset < 7) {
        pointOffset = 7;
    } else if (pointOffset > this.offsetWidth - 7) {
        pointOffset = this.offsetWidth - 7
    }

    if (pointType === 'left') {
        if (pointOffset > parseInt(unactivePoint.style.left)) {
            pointOffset = parseInt(unactivePoint.style.left);
        }
    } else if (pointType === 'right') {
        if (pointOffset < parseInt(unactivePoint.style.left) + 14) {
            pointOffset = parseInt(unactivePoint.style.left) + 14;
        }
    }

    point.style.left = pointOffset - 7 + "px";

    let line = this.querySelector('.range__slider-line')
    let leftPointOffset = parseInt(this.querySelector('.range__slider-point--left').style.left)
    if (!leftPointOffset) {
        leftPointOffset = 0;
    }
    let rightPointOffset = parseInt(this.querySelector('.range__slider-point--right').style.left)
    
    if (isNaN(rightPointOffset)) {
        rightPointOffset = this.offsetWidth - 14
    }
    console.log(rightPointOffset)


    line.style.width = rightPointOffset - leftPointOffset + "px";
    line.style.left = parseInt(this.querySelector('.range__slider-point--left').style.left) + 2 + 'px';

    let startVal = this.closest('.range').getAttribute('start-val')
    let endVal = this.closest('.range').getAttribute('end-val')
    let rangeWidth = this.offsetWidth - 14;
    let range = endVal - startVal;
    let startPer = (leftPointOffset / rangeWidth).toFixed(10)
    console.log(rightPointOffset);
    let endPer = (rightPointOffset / rangeWidth).toFixed(10)

    let start = (range * startPer).toFixed(0);
    let end = (range * endPer).toFixed(0);

    let rangeElement = this.parentElement.querySelector('.range__title-values');
    rangeElement.textContent = (+startVal + +start) + "₽ - " + (+startVal + +end) +"₽"
}

// Обработчик нажатия ПКМ по поинту ренджа
function rangeMousedown(event) {
    let target = event.target;
    let rangeWidth = this.offsetWidth - 14;

    if (target.classList.contains('range__slider-point')) {
        target.classList.add('active-point')
        this.querySelector('.range__slider-wrapper').addEventListener('mousemove', mousemove);
        document.body.onmouseup = rangeMouseup.bind(this)
    }


}

function rangeMouseup(event) {
    this.querySelector('.range__slider-wrapper').removeEventListener('mousemove', mousemove)
    if (this.querySelector('.active-point')) {
        this.querySelector('.active-point').classList.remove('active-point');
    }

}

let ranges = document.querySelectorAll('.range');

ranges.forEach(el => {
    el.addEventListener('mousedown', rangeMousedown);
});



console.log('%c range_line script is working', 'color: green;')