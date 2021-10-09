
let dropdownInputs = document.querySelectorAll('.input-wrapper__dropdown');
let dropdownPanels = document.querySelectorAll('.dropdown-panel');

dropdownInputs.forEach( (el) => {
    el.addEventListener('click', function(event){
        let target = event.target
        if(
            target.classList.contains('input__dropdown') || 
            target.classList.contains('input__dropdown-icon') ||
            target.classList.contains('countform__btns-access')
        ){
            let wrapper = this.closest('.input-wrapper__dropdown');
            let dropdownPanel = wrapper.querySelector('.dropdown-panel')
            dropdownPanel.classList.toggle('dropdown-panel--active')
        }   

        if (target.classList.contains('dropdown-panel__line-btn')) {
            let settingsPanel = target.parentElement;
            let valueBox = settingsPanel.querySelector('span')
            let value = +valueBox.textContent;

            let type = target.classList.contains('dropdown-panel__line-settings-down') ? 'down' : 'up';
            if (type === 'down' && value > 0) {
                value -= 1;
                valueBox.textContent = value;


            } else if (type === 'up' && value < 10) {
                value += 1;
                valueBox.textContent = value;
            }
            if (value === 0) {
                target.parentElement.classList.add('zero-value')
            } else {
                target.parentElement.classList.remove('zero-value')
            }
            if (value === 10) {
                target.parentElement.classList.add('full-value')
            } else {
                target.parentElement.classList.remove('full-value');
            }

            let lines = this.querySelectorAll('.dropdown-panel__line');
            let inputText = '';
            lines.forEach(el => {
                let par = el.querySelector('h3').textContent;
                let value = el.querySelector('span').textContent;
                inputText += value + ' ' + par + ", "
            });
            if (inputText.length > 20) {
                inputText = inputText.slice(0, 20) + "..."
            }
            this.querySelector('.input__dropdown').value = inputText;
        }

        if (target.classList.contains('countform__btns-clear')) {
            let lines = this.querySelectorAll('.dropdown-panel__line');
            lines.forEach(el => {
                el.querySelector('span').textContent = '0';
                el.querySelector('.dropdown-panel__line-settings').classList.add('zero-value')
            });
        }
    })


} )

dropdownPanels.forEach( (el) => {
    el.addEventListener('click', (event) => {
    })
})

console.warn('input_dropdown script is working')