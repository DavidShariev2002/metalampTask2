import './input_simple.scss';

import '../../../../../node_modules/inputmask/dist/jquery.inputmask.min.js';

$(document).ready(function () {
    var dateInputMask = new Inputmask('99.99.99')
    dateInputMask.mask(".mask-date")
})


console.log('%c input_simple script is working', 'color: green;')