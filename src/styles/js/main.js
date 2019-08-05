import $ from 'jquery';

$(function() {

    $('[data-toggle="tooltip"]').tooltip();
    if ($('input.form-check-custom').length > 0)
        {
            var inputList = $('input.form-check-custom');
            for (var i = inputList.length - 1; i >= 0; i--) {
                $(inputList[i]).prettyCheckable();
            }
        }
    $('.datepicker_input').datepicker({
        format: 'dd MM yyyy'
    });

});
