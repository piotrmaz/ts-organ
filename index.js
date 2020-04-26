// FOOTER DATE
$(".footer-date").html(new Date().getFullYear());

// SLICK CAROUSEL HOME page
$(document).ready(function(){
  $('.carousel').slick({
  slidesToShow: 2,
  dots:false,
  centerMode: true,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    variableWidth: true,
  });
});

// VALIDATION form Bootstrap

(function() {
  'use strict';
  window.addEventListener('load', function() {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName('needs-validation');
    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function(form) {
      form.addEventListener('submit', function(event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);
    });
  }, false);
})();