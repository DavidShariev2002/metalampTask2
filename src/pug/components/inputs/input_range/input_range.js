import './input_range.scss';

import AirDatepicker from '../../../../../node_modules/air-datepicker/air-datepicker';


let buttonAccess = {
    content: 'применить',
    className: 'access',
    onClick: function(dp){
        let calendarWrapper = dp['$datepicker'].parentElement;
        calendarWrapper.classList.remove('input-range__calendar--show')
    }
}
let buttonClear = {
    content: 'очистить',
    className: 'clear',
    onClick: function (dp) {
        let calendarWrapper = dp['$datepicker'].parentElement;
        dp.selectedDates = [];
        console.error(calendarWrapper)
        let selectedDays = calendarWrapper.querySelectorAll('.-selected-');
        selectedDays.forEach(selectedDay => {
            selectedDay.classList.remove('-selected-');
        })
        let inputs = calendarWrapper.parentElement.querySelectorAll('.input-dropdown input')
        inputs[0].value = "ДД.ММ.ГГГГ"
        inputs[1].value = "ДД.ММ.ГГГГ"
    }
}
let calendars = document.querySelectorAll('.input-range__calendar')
calendars.forEach(calendar => {
    let inputs = calendar.parentElement.querySelectorAll('.input-dropdown input');
    let dp = new AirDatepicker(calendar, {
        navTitles: {
            days: "<h2>MMMM<i>yyyy</i></h2>"
        },
        inputs: inputs,
        minDate: new Date(),
        multipleDates: true,
        onSelect: function({date, formattedDate, datepicker}){
            inputs[0].value = formattedDate[0]
            if(datepicker.selectedDates.length > 1){
                datepicker.selectedDates = datepicker.selectedDates.splice(-1)
                
                let newDate = date[1]
                let oldDate = date[0]

                if(newDate > oldDate){
                    inputs[0].value = formattedDate[0]
                    inputs[1].value = formattedDate[1]
                }else if(newDate < oldDate){
                    inputs[0].value = formattedDate[1]
                    inputs[1].value = formattedDate[0]
                }

            }
        },
        buttons: [buttonClear, buttonAccess]
    });

    document.dp_list.push(dp);

    calendar.querySelector('.air-datepicker-nav--action[data-action="prev"] svg').innerHTML = "<path d='M 17,11 l -6,6 l 6,6 M 12,17 l 12,0' fill='#BC9CFF'/>";
    calendar.querySelector('.air-datepicker-nav--action[data-action="next"] svg').innerHTML = "<path d='M 13,11 l 6,6 l -6,6 M 6,17 l 12,0' fill='#BC9CFF'/>"
})

let rangeInputs = document.querySelectorAll('.input-range .input-dropdown')

rangeInputs.forEach( input => {
    input.addEventListener('click', function(){
        let wrapper = this.closest('.input-range');
        wrapper.querySelector('svg.input-dropdown__icon--rotated').classList.remove('input-dropdown__icon--rotated')
        
        let calendar = wrapper.querySelector('.input-range__calendar');
        calendar.classList.toggle('input-range__calendar--show')
    })
})

console.log('%c input-range script is working', 'colors: green')