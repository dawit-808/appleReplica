// nav toggler
$(document).ready(function () {
  $("#menu").click(function () {
    $(".navbar-collapse").slideToggle(); // Toggle the menu smoothly
  });

  // Close menu when clicking outside
  $(document).click(function (event) {
    if (!$(event.target).closest(".navbar").length) {
      $(".navbar-collapse").slideUp();
    }
  });
});
