import './checkbox_list.scss';

var lists = document.querySelectorAll('.list h3');
lists.forEach(el => {
    el.addEventListener('click', function (event) {
        this.parentElement.classList.toggle('list--closed')
    })
});

console.log('%c checkbox_list script is working', 'color: green');