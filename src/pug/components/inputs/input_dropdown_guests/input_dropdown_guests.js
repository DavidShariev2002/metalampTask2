import './input_dropdown_guests.scss';

let btns = document.querySelectorAll('.panel-dropdown__line-btn')
let actions = document.querySelectorAll('.panel-dropdown__actions')

btns.forEach( btn => {
    btn.addEventListener('click', function(event){
        let type = this.classList.contains('panel-dropdown__line-settings-up') ? 'up' : 'down';
        let dropdownPanel = this.closest('.panel-dropdown')
        let lines = dropdownPanel.querySelectorAll('.panel-dropdown__line')
        let input = dropdownPanel.closest('.filter-date').querySelector('.input-dropdown__input')

        let inputValueString = '';
        lines.forEach( line => {
            let value = line.querySelector('.panel-dropdown__line-settings-number').textContent
            let param = line.querySelector('h3').textContent;
            inputValueString+= value + " " + param + ", "

            if(inputValueString.length > 20){
                inputValueString = inputValueString.slice(0, 20) + "..."
            }
        })
        input.value = inputValueString;

    })
})


actions.forEach( actionPanel => {
    actionPanel.addEventListener('click', function(event){
        let btn = event.target;
        let dropdownPanel = this.closest('.panel-dropdown')
        let input = dropdownPanel.closest('.filter-date').querySelector('.input-dropdown__input')
        

        if (btn.classList.contains('countform__btns-clear')){
            let lines = dropdownPanel.querySelectorAll('.panel-dropdown__line')

            lines.forEach(line => {
                line.querySelector('.panel-dropdown__line-settings').classList.add('zero-value');
                line.querySelector('.panel-dropdown__line-settings').classList.remove('full-value')
                let value = line.querySelector('.panel-dropdown__line-settings-number')
                value.textContent = '0'
            })

            input.value="Удобства"
        }

        if(btn.classList.contains('countform__btns-access')){
            this.closest('.filter-date__dropdown--opened').classList.remove('filter-date__dropdown--opened');

        }
    })
})

console.log("%c input_dropdown_guest script is working", "color: green;")