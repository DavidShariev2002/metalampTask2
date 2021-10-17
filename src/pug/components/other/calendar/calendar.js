import './calendar.scss';

import '../../../../../node_modules/air-datepicker/air-datepicker';
import '../../../../../node_modules/air-datepicker/air-datepicker.css';
import AirDatepicker from '../../../../../node_modules/air-datepicker/air-datepicker';

let calendar = document.querySelectorAll('.calendar')

let buttonAccess = {
    content: 'применить',
    className: 'access',
    
}
let buttonClear = {
    content: 'очистить',
    className: 'clear',
    
}

document.dp_list = [];

calendar.forEach( calendar => {
    let dp = new AirDatepicker(calendar, {
        navTitles: {
            days: "<h2>MMMM<i>yyyy</i></h2>"
        },
        multipleDates: true,
        buttons: [buttonClear, buttonAccess]
    });

    document.dp_list.push(dp);

    calendar.querySelector('.air-datepicker-nav--action[data-action="prev"] svg').innerHTML = "<path d='M 17,11 l -6,6 l 6,6 M 12,17 l 12,0' fill='#BC9CFF'/>";
    calendar.querySelector('.air-datepicker-nav--action[data-action="next"] svg').innerHTML = "<path d='M 13,11 l 6,6 l -6,6 M 6,17 l 12,0' fill='#BC9CFF'/>"
})

console.log(document.dp_list);



console.log('%c calendar script is working', 'color: green;')