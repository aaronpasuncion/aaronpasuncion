$(document).ready(function() {
  // home page

  // about section
  $("#aboutMe").on("click", function() {
    var $barCapacity = $(".bar-capacity");
    if ($("#rightBanner").hasClass("banner-link-click")) {
      $("#rightBanner").removeClass("banner-link-click");
      $("#create").removeClass("creation-content");
      $("#create").addClass("opacity-hide");
    }

    //add about-me class to implement animation
    $(".about-me h3").css("display", "flex");
    //retrieve the text of the percentrage of each skill and use that value for the width of the skill bar
    $barCapacity.each(function(index) {
      var $barFill = $(this)
        .next()
        .text();
      $(this).css("width", $barFill);
    });

    // toggle center logo
    $(".right-side").css({
      animation: "scaleX-hide 1s forwards"
    });
    $(".left-side").css({
      animation: "scaleX-hide 1s forwards"
    });

    // creation content display to none
    $(".creation-content").css("display", "none");
    // toggle the left banner
    $("#leftBanner").toggleClass("banner-link-click");
    // toggle opacity-hide to either hide or display the content of the about section
    $(".about-content").toggleClass("opacity-hide");
    // about-right / personal skills display
    $(".about-right").css("display", "flex");
    $(".p-skill").css("display", "flex");
  });

  // creation section
  $("#creation").on("click", function() {
    if ($("#leftBanner").hasClass("banner-link-click")) {
      $("#leftBanner").removeClass("banner-link-click");
      $(".about-content").addClass("opacity-hide");
    }
    // if ($("#create").hasClass("creation-content")) {
    //   $("#create").css("display", "none");
    // }

    // set about-right/personal skills display to none to allow more space for creationn section
    $(".about-right").css("display", "none");

    // toggle center logo
    $(".right-side").css({
      animation: "scaleX-hide 1s forwards"
    });
    $(".left-side").css({
      animation: "scaleX-hide 1s forwards"
    });

    $("#create").toggleClass("opacity-hide");
    $("#create").toggleClass("creation-content");
    $("#rightBanner").toggleClass("banner-link-click");
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
