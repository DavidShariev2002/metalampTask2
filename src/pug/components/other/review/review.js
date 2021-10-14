import './review.scss';

let reviews = document.querySelectorAll('.review');

reviews.forEach( review => {
    let now = new Date();
    let date = new Date(review.getAttribute('date'));
    let avatarBox = review.querySelector('.review__avatar');
    let avatarUrl = review.getAttribute('imgUrl');
    let img = document.createElement('img');
    let dateSpan = review.querySelector('.review__date');
    img.src = avatarUrl;
    avatarBox.appendChild(img)

    dateSpan.textContent = Math.floor((now - date) / 1000 / 60 / 60 / 24) + ' дней назад';
})

console.log('%c review script is working', 'color: green;')