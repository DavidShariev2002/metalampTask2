import './input_simple.scss';

import '../../../../../node_modules/inputmask/dist/jquery.inputmask.min.js';

$(document).ready(function () {
    var dateInputMask = new Inputmask({ alias: "datetime", inputFormat: "dd/mm/yyyy", placeholder:'ДД.ММ.ГГГГ' })
    dateInputMask.mask("input.mask-date")
})


console.log('%c input_simple script is working', 'color: green;')