import './input_dropdown.scss';

let dropdownInputs = document.querySelectorAll('.input-dropdown')

dropdownInputs.forEach(input => {
   input.addEventListener( 'click', function(event){
       this.querySelector('.input-dropdown__icon').classList.toggle('input-dropdown__icon--rotated')
   }) 
});

console.log("%c input_dropdown script is working", "color: green");