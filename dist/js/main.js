$(document).ready(function() {
  // home page

  // about section
  $("#aboutMe").on("click", function() {
    if ($("#rightBanner").hasClass("banner-active")) {
      creationHide();
      aboutDisplay();
    } else if ($("#leftBanner").hasClass("banner-active")) {
      aboutHide();
      showLogo();
    } else {
      // creation content display to none
      $(".creation-content").css("display", "none");
      //display about content
      aboutDisplay();
      hideLogo();
    }
  });

  // creation section
  $("#creation").on("click", function() {
    if ($("#leftBanner").hasClass("banner-active")) {
      aboutHide();
      creationDisplay();
    } else if ($("#rightBanner").hasClass("banner-active")) {
      creationHide();
      showLogo();
      // hide the personal skills section in the about content
      $(".about-right").css("display", "none");
    } else {
      creationDisplay();
      hideLogo();
    }
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

  // functions
  /* ABOUT SECTION FUNCTIONS*/

  //display about section
  function aboutDisplay() {
    let $barCapacity = $(".bar-capacity");

    //display personal skills section
    $("#leftBanner").addClass("banner-active");
    $(".about-content").removeClass("opacity-hide");
    $(".about-right").css("display", "flex");
    $(".personal-skills").css("display", "flex");
    $(".p-skill-header").css("display", "flex");
    $(".p-skill-col").css("display", "flex");
    $(".about-me").css("display", "flex");
    $("abour-right").css("display", "flex");
    //retrieve the text of the percentrage of each skill and use that value for the width of the skill bar
    window.setTimeout(function() {
      $barCapacity.each(function(index) {
        var $barFill = $(this)
          .next()
          .text();
        $(this).css("width", $barFill);
      });
    }, 2000);

    // if the left banner content isn't hidden, then hide it
    if (!$("#create").hasClass("opacity-hide")) {
      $("#create").addClass("opacity-hide");
      $("#rightBanner").removeClass("banner-inactive");
    }
    // add banner inactive to the other banner
    $("#rightBanner").addClass("banner-inactive");
  }

  // hide left banner content
  function aboutHide() {
    $("#leftBanner").removeClass("banner-active");
    $(".about-content").addClass("opacity-hide");
    $(".about-right").css("display", "none");
    $(".about-me").css("display", "none");
    $(".personal-skills").css("display", "none");
    $(".p-skill-header").css("display", "none");
    $(".p-skill-col").css("display", "none");
    $("abour-right").css("display", "none");
    // remove banner inactive to the other banner
    $("#rightBanner").removeClass("banner-inactive");
  }

  /* CREATION SECTION FUNCTIONS*/
  // display creation section
  function creationDisplay() {
    // display right banner content and remove opacity hide
    $("#rightBanner").addClass("banner-active");
    $("#create").removeClass("opacity-hide");
    $("#create").addClass("creation-content");
    // add banner inactive to the other banner
    $("#leftBanner").addClass("banner-inactive");
  }

  // hide creation section
  function creationHide() {
    // if user presses the creation link the second time, re-apply opacity hide styles and remove creation-content and banner-active classes
    $("#rightBanner").removeClass("banner-active");
    $("#create").removeClass("creation-content");
    $("#create").addClass("opacity-hide");
    // remove banner inactive from the other banner
    $("#leftBanner").removeClass("banner-inactive");
  }

  // hide center logo function
  function hideLogo() {
    // toggle center logo
    $(".right-side").css({
      animation: "scaleX-hide 1s forwards"
    });
    $(".left-side").css({
      animation: "scaleX-hide 1s forwards"
    });
  }

  // display center logo function
  function showLogo() {
    // toggle center logo
    $(".right-side").css({
      animation: "scaleX-display 1s forwards "
    });
    $(".left-side").css({
      animation: "scaleX-display 1s forwards "
    });
  }
});
