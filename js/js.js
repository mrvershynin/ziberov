//Animation for Button
(function() {

  "use strict";

  var toggles = document.querySelectorAll(".cmn-toggle-switch");

  for (var i = toggles.length - 1; i >= 0; i--) {
    var toggle = toggles[i];
    toggleHandler(toggle);
  };

  function toggleHandler(toggle) {
    toggle.addEventListener( "click", function(e) {
      e.preventDefault();
      (this.classList.contains("active") === true) ? this.classList.remove("active") : this.classList.add("active");
    });
  }

})();

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
