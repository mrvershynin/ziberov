//Animation for Button
(function() {

    "use strict";

    var toggles = document.querySelectorAll(".cmn-toggle-switch");

    for (var i = toggles.length - 1; i >= 0; i--) {
        var toggle = toggles[i];
        toggleHandler(toggle);
    };

    function toggleHandler(toggle) {
        toggle.addEventListener("click", function(e) {
            e.preventDefault();
            (this.classList.contains("active") === true) ? this.classList.remove("active"): this.classList.add("active");
        });
    }

})();
$('document').ready(function() {
    $('#footer').load('footer.html');
});

//SEND EMAIL BRAZIL version
$('document').ready(function() {
    $('.send').on('click', validateForm);

    function validateForm() {
        var email_test = $('#email').val();
        var filter = /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,4}$/;
        if (filter.test(email_test)) {
            $.get(
                "message.php", {
                    "email": $('#email').val(),
                    "name": $('#name').val(),
                    "tel": $('#telephone').val(),
                    "msg": $('#comment').val()
                },
                ifSuccess
            );
        } else {
            $('#send-res').html('Verifique os dados inseridos!').css({ "color": "red", "font-size": "14px" });
        }
    }

    function ifSuccess(data) {
        if (data == 1) {
            $('#send-res').html('Mensagem enviada com sucesso!').css({ "color": "green", "font-size": "14px" });
            $('#email, #name, #comment').val('');
        } else {
            $('#send-res').html('Verifique os dados inseridos!').css({ "color": "red", "font-size": "14px" });
        }
    }
});

//SEND EMAIL ENGLISH version
$('document').ready(function() {
    $('.send-en').on('click', validateForm);

    function validateForm() {
        var email_test = $('#email').val();
        var filter = /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,4}$/;
        if (filter.test(email_test)) {
            $.get(
                "message.php", {
                    "email": $('#email').val(),
                    "name": $('#name').val(),
                    "tel": $('#telephone').val(),
                    "msg": $('#comment').val()
                },
                ifSuccess
            );
        } else {
            $('#send-res').html('Check the entered data!').css({ "color": "red", "font-size": "14px" });
        }
    }

    function ifSuccess(data) {
        if (data == 1) {
            $('#send-res').html('Message sent successfully!').css({ "color": "green", "font-size": "14px" });
            $('#email, #name, #telephone, #comment').val('');
        } else {
            $('#send-res').html('Check the entered data!').css({ "color": "red", "font-size": "14px" });
        }
    }
});

//SEND EMAIL RUSSIAN version
$('document').ready(function() {
    $('.send-ru').on('click', validateForm);

    function validateForm() {
        var email_test = $('#email').val();
        var filter = /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,4}$/;
        if (filter.test(email_test)) {
            $.get(
                "message.php", {
                    "email": $('#email').val(),
                    "name": $('#name').val(),
                    "tel": $('#telephone').val(),
                    "msg": $('#comment').val()
                },
                ifSuccess
            );
        } else {
            $('#send-res').html('Проверьте введенные данные!').css({ "color": "red", "font-size": "14px" });
        }
    }

    function ifSuccess(data) {
        if (data == 1) {
            $('#send-res').html('Сообщение успешно отправлено!').css({ "color": "green", "font-size": "14px" });
            $('#email, #name, #comment').val('');
        } else {
            $('#send-res').html('Проверьте введенные данные!').css({ "color": "red", "font-size": "14px" });
        }
    }
});

