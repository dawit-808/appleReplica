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

$(document).ready(function () {
  // Footer toggle function with arrows
  $("footer h3").on("click", function () {
    if ($(window).width() < 768) {
      const $h3 = $(this);
      const $ul = $h3.next("ul");

      // Toggle active class for arrow rotation
      $h3.toggleClass("active");

      // Close other open sections
      $("footer h3").not($h3).removeClass("active").next("ul").slideUp();

      // Toggle current section
      $ul.slideToggle();
    }
  });

  // Close all footer sections on load for mobile
  if ($(window).width() < 768) {
    $("footer ul").hide();
  }

  // Handle window resize
  $(window).resize(function () {
    if ($(window).width() >= 768) {
      $("footer ul").show();
      $("footer h3").removeClass("active");
    } else {
      $("footer ul").hide();
    }
  });
});
