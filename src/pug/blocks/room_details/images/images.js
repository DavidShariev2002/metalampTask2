import './images.scss';

let imageWrapper = document.querySelector('.head-images')

let imgUrl1 = imageWrapper.getAttribute('url1');
let imgUrl2 = imageWrapper.getAttribute('url2');
let imgUrl3 = imageWrapper.getAttribute('url3');

[imgUrl1, imgUrl2, imgUrl3].forEach( (url, i) => {
    let image = document.createElement('img');
    image.src = url;
    image.classList.add('head-images__image-' + (i+1))
    imageWrapper.appendChild(image);
})

console.log("%c images block room_dtails is working", "color: purple");