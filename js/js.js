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
    $('.send').on('click', validateForm);

    //SEND EMAIL IN DESKTOP VERSION
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
            $('#send-res').html('Por favor, insira um e-mail válido.').css({ "color": "red", "font-size": "14px" });
        }
    }


    function ifSuccess(data) {
        if (data == 1) {
            $('#send-res').html('Message sent successfully!');
            $('#resultModal').modal('show');
            setTimeout(function() {
                $('#resultModal').modal('hide');
            }, 3000);
            $('#email, #name, #comment').val('');
        } else {
            $('#send-res').html('Check the entered data.');
            $('#resultModal').modal('show');
        }
    }
});





//Animation for mobile menu
/*
var mmenu='close';

$('document').ready(function(){
  $('.cmn-toggle-switch').on('click', showMmenu);
});

function showMmenu (){
  if (mmenu == 'close') {
    $('.mmenu').animate({
    'top': '0'
  },1000);
  mmenu = 'open';

  $('.mmenu-menu').fadeOut(1000);
  $('.mmenu-close').fadeIn(1000);
}

else {
  
  $('.mmenu').animate({
    'top': '-30%'
  },1000);
  mmenu = 'close';
  $('.mmenu-menu').fadeIn(1000);
  $('.mmenu-close').fadeOut(1000);
}
}
*/