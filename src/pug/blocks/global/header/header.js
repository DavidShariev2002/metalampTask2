import './header.scss';

let headers = document.querySelectorAll('.header');

headers.forEach(header => {
    let activePage = header.dataset.activepage;
    if(activePage){
        let activePageLink = header.querySelector("." + activePage);
        activePageLink.classList.add('active-page-link');
    }
})

console.log('%c header block global script is working', 'color: purple')