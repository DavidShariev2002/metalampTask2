import './filter_date.scss';

let dateFilters = document.querySelectorAll('.filter-date');

dateFilters.forEach( filter => {
    let filterInput = filter.querySelector('.input-wrapper');
    filterInput.addEventListener('click', function(event){
        let filter = this.parentElement;
        let dropdownPanel = filter.querySelector('.filter-date__dropdown')
        dropdownPanel.classList.toggle('filter-date__dropdown--opened')
    })
})

console.log('%c filter_date script is working', 'color: green;')