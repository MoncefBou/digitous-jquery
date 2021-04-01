$(function () {

    $("button").click(function () {
        var inputLength = $('input').val().length;

        if (inputLength > 5) {
            $('input').addClass('is-valid');

            if ($('input').hasClass('is-invalid')) {

                $('input').removeClass('is-invalid');
            }
        } else {
            $('input').addClass('is-invalid');
        }
    });
})
