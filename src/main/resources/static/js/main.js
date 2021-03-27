$(document).ready(function () {

    $('.table .eBtn').on('click', function (event) {
        event.preventDefault();
         var href = $(this).attr('href');

        $.get(href, function (user, status) {
            $('.myForm #firstName').val(user.firstName);
            $('.myForm #lastName').val(user.lastName);
            $('.myForm #email').val(user.email);
            $('.myForm #userName').val(user.userName);
            $('.myForm #password').val(user.password);
        });

        $('.myForm #exampleModal').modal();
    });
});