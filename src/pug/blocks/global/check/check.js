import './check.scss';

let checks = document.querySelectorAll('.check');

checks.forEach(check => {
    let startDate = check.dataset.start;
    let startYear = startDate.slice(6);
    let startMonth = startDate.slice(3, 5);
    let startDay = startDate.slice(0, 2);
    let stopDate = check.dataset.stop;
    let stopYear = stopDate.slice(6);
    let stopMonth = stopDate.slice(3, 5);
    let stopDay = stopDate.slice(0, 2);

    startDate= new Date(startYear+"-"+startMonth+"-"+startDay);
    stopDate = new Date(stopYear+"-"+stopMonth+"-"+stopDay);
    
    let timeRange = stopDate.getTime() - startDate.getTime();

    let days = Math.floor(timeRange / 1000 / 60 / 60 / 24)

    let dayPrice = +check.dataset.price;
    let dayPriceResult = +dayPrice*days;
    check.querySelector('.check__price-item-days .left').textContent = dayPrice + "₽" + " x "+days+" суток"
    check.querySelector('.check__price-item-days .right').textContent = dayPriceResult + "₽";

    let extraPrice = +check.dataset.extraprice;

    let discount = +check.dataset.discount;

    let fullPriceResult = dayPriceResult + extraPrice - discount;

    check.querySelector('.check__price .result').textContent = fullPriceResult +"₽";

    
    
    
})

console.log('%c check block form_elements script is working', 'color: purple')