import './like.scss';

let likes = document.querySelectorAll('.like');

likes.forEach( el => {
    el.addEventListener('click', function(event){
        this.classList.toggle('like--clicked')

        let likesNumber = +this.dataset.number;

        if(this.classList.contains('like--clicked'))
        {
            likesNumber++;
        }
        else{
            likesNumber--;
        }
        let likeNumberText = this.querySelector('.like__number')

        this.dataset.number = likesNumber;
        likeNumberText.textContent= likesNumber;
    })
})

console.log('%c like script is working', 'color: green;')