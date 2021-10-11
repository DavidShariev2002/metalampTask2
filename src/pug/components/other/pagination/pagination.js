import './pagination.scss';

let paginations = document.querySelectorAll('.pagination');
paginations.forEach( pagination => {
    let pagNavBtns = pagination.querySelector('.pagination__nav-buttons')
    pagNavBtns.addEventListener('click', function(event){
        let btn = event.target.closest('button');
        var pageList = this.parentElement.querySelector('.pagination__nav-pages-list');
        let activePage = pageList.querySelector('.pagination__nav-pages-item--active');
        let index = Number.parseInt(activePage.textContent)
        
        if (btn.classList.contains('pagination__nav-buttons-button-next')){
            let nextPage = activePage.nextElementSibling
            if (nextPage){
                activePage.classList.remove('pagination__nav-pages-item--active')
                nextPage.classList.add('pagination__nav-pages-item--active')
                if(!nextPage.nextElementSibling){
                    btn.classList.remove('pagination__nav-buttons-button--active')
                }else{
                    let left = Number.parseInt(pageList.style.left);
                    pageList.style.left = left - 40 + 'px';
                }

                this.querySelector('.pagination__nav-buttons-button-prev').classList.add('pagination__nav-buttons-button--active')
            }

        }
        if (btn.classList.contains('pagination__nav-buttons-button-prev')) {
            let prevPage = activePage.previousElementSibling
            if (prevPage) {
                activePage.classList.remove('pagination__nav-pages-item--active')
                prevPage.classList.add('pagination__nav-pages-item--active')
                if (!prevPage.previousElementSibling) {
                    btn.classList.remove('pagination__nav-buttons-button--active')
                }

                
            }

            this.querySelector('.pagination__nav-buttons-button-next').classList.add('pagination__nav-buttons-button--active')
            
            let left = Number.parseInt(pageList.style.left);
            if(left < 0){
                pageList.style.left = left + 40 + 'px';
            }

        }
    })
})

console.log('%c pagination script is working', 'color: green');