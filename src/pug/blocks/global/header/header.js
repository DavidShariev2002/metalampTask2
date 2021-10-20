import './header.scss';

let headers = document.querySelectorAll('.header');

headers.forEach(header => {
    console.log(header.dataset)
    let activePage = header.dataset.activepage;
    console.log(activePage);
    let activePageLink = header.querySelector("." + activePage);
    console.log(activePageLink);
    activePageLink.classList.add('active-page-link');
})

console.log('%c header block global script is working', 'color: purple')