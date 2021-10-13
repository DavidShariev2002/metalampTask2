import './input_dropdown_guests.scss';

let btns = document.querySelectorAll('.guests-dropdown__line-btn')
let actions = document.querySelectorAll('.guests-dropdown__actions')

btns.forEach( btn => {
    btn.addEventListener('click', function(event){
        let type = this.classList.contains('guests-dropdown__line-settings-up') ? 'up' : 'down';
        let dropdownPanel = this.closest('.guests-dropdown')
        let lines = dropdownPanel.querySelectorAll('.guests-dropdown__line')
        let input = dropdownPanel.closest('.filter-date').querySelector('.input-dropdown__input')
        console.log(input);

        let inputValueString = '';
        lines.forEach( line => {
            let value = line.querySelector('.guests-dropdown__line-settings-number').textContent
            let param = line.querySelector('h3').textContent;
            inputValueString+= value + " " + param + ", "

            if(inputValueString.length > 20){
                inputValueString = inputValueString.slice(0, 20) + "..."
            }
        })
        input.value = inputValueString;

        console.log(lines)
    })
})


actions.forEach( actionPanel => {
    actionPanel.addEventListener('click', function(event){
        let btn = event.target;
        let dropdownPanel = this.closest('.guests-dropdown')
        let input = dropdownPanel.closest('.filter-date').querySelector('.input-dropdown__input')
        

        if (btn.classList.contains('countform__btns-clear')){
            let lines = dropdownPanel.querySelectorAll('.guests-dropdown__line')

            lines.forEach(line => {
                line.querySelector('.guests-dropdown__line-settings').classList.add('zero-value');
                line.querySelector('.guests-dropdown__line-settings').classList.remove('full-value')
                let value = line.querySelector('.guests-dropdown__line-settings-number')
                value.textContent = '0'
            })

            input.value="Удобства"
        }

        if(btn.classList.contains('countform__btns-access')){
            this.closest('.filter-date__dropdown--opened').classList.remove('filter-date__dropdown--opened');

        }
    })
})

console.log("%c input_dropdown_guests script is working", "color: green;")