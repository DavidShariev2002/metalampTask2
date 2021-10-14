import './plus.scss';

let pluses = document.querySelectorAll('.plus');

pluses.forEach( plus => {
    let imgSrc = plus.getAttribute('imgUrl');
    let img = document.createElement('img');
    img.src=imgSrc
    plus.querySelector('.plus__img').appendChild(img);
})

console.log("%c plus script is working", 'color: green');