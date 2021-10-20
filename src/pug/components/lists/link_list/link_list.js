import './link_list.scss';

let linkLists = document.querySelectorAll('.link-list');

linkLists.forEach(linkList => {
    let title = linkList.querySelector('.link-list__title')
    title.addEventListener('click', function(event){
        linkList.classList.toggle('list--closed');
    })
})

console.log("%c link_list component is working", "color: green");