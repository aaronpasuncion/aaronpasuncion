$(document).ready(function() {
  // index page
  $("#aboutMe").on("click", function() {
    var $barCapacity = $(".bar-capacity");
    if ($("#rightBanner").hasClass("banner-link-click")) {
      $("#rightBanner").removeClass("banner-link-click");
    }
    $barCapacity.each(function(index) {
      var $barFill = $(this)
        .next()
        .text();
      $(this).css("width", $barFill);
    });
    $("#leftBanner").toggleClass("banner-link-click");
    $(".about-content").toggleClass("opacity-hide");
  });
  $("#creation").on("click", function() {
    if ($("#leftBanner").hasClass("banner-link-click")) {
      $("#leftBanner").removeClass("banner-link-click");
    }
    $("#rightBanner").toggleClass("banner-link-click");
    $(".about-content").addClass("opacity-hide");
    $(".main-title").toggleClass("main-title-left");
  });

  // Side Menu
  $("#menu").on("click", function() {
    // $("#menu").css("opacity", "0");
    $("#lgMenu").addClass("enter");
    $("body").css("overflow", "hidden");
    $("#lgMenu").css("width", "400px");
  });

  $("#exit").on("click", function() {
    $("#lgMenu").removeClass("enter");
    $("#menu").css("opacity", "1");
    $("body").css("overflow", "auto");
    $("#lgMenu").css("width", "0px");
  });
});
