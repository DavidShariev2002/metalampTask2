import './panel_dropdown.scss';

let dropdownBtns = document.querySelectorAll('.panel-dropdown__line-btn')
dropdownBtns.forEach( btn => {
    btn.addEventListener('click', function(event){
        let type = this.classList.contains('panel-dropdown__line-settings-up') ? 'up' : 'down';
        let dropdownPanel = this.closest('.panel-dropdown');
        let settingsPanel = this.closest('.panel-dropdown__line-settings')
        let valueSpan = settingsPanel.querySelector('span');
        let value = +valueSpan.textContent
        

        if(type === 'up'){
            value++;
            settingsPanel.classList.remove('zero-value')

            if(value <= 10){
                valueSpan.textContent = value;
            }
            if(value === 10){
                settingsPanel.classList.add('full-value');
            }

        }
        if(type === 'down'){
            value--;
            settingsPanel.classList.remove('full-value');

            if(value >= 0){
                valueSpan.textContent = value;
            }
            if(value === 0){
                settingsPanel.classList.add('zero-value');
            }
        }


    })
})

console.log('%c panel_dropdown script is working', 'color: green;')