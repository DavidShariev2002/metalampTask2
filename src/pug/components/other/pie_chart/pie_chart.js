import './pie_chart.scss';

import Chart from '../../../../../node_modules/chart.js/auto/auto';

let pies = document.querySelectorAll('.pie_chart')

pies.forEach((el, ind) => {
    el.id = el.classList[0]+"-"+ind;    
    let chartEl = document.getElementById(el.id)

    const config = {
        type: 'doughnut',
        data: {
            datasets: [{
                width: 2,
                data: [el.getAttribute('good'), el.getAttribute('medium'), el.getAttribute('awesome'),  el.getAttribute('bad')],
                backgroundColor: [
                    '#b19efe',
                    '#6fcf9b',
                    '#ffcb9c',
                    '#000'
                ],
                hoverBackgroundColor: [
                    '#b19efe',
                    '#6fcf9b',
                    '#ffcb9c',
                    '#000'
                ],
            }]
        },
        options: {
            responsive: true,
            maintainAspectRation: true,
            legend: {
                display: false
            },
            cutout: '90%',
        }
        
    };

    var myChart = new Chart(
        chartEl, 
        config
    );
    el.style.width = '120px'
})

