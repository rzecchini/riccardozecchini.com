//jQuery(function ($) {
InstantClick.init(50);
$(".project-content").fitVids();
$(function () {
  FastClick.attach(document.body);
});

var pxrange = 100,
  scrolled = 0,
  label = "Index",
  value = -400,
  previousScroll = 0, // previous scroll position
  menuOffset = 136, // height of menu (once scroll passed it, menu is hidden)
  detachPoint = 800, // point of detach (after scroll passed it, menu is fixed)
  hideShowOffset = 60;

function showHide(l, v) {
  $(".project-nav--thumbs").css("bottom", v);
  setTimeout(function () {
    $(".pnav--l, .pnav--r").text(l);
    label = l;
    value = v;
  }, 200);
}

$(window).scroll(function () {
  scrolled = $(window).scrollTop();
  var scrollDifference = Math.abs(scrolled - previousScroll);

  if (scrolled > pxrange) {
    $(".pnav--l, .pnav--r").css("opacity", 1);
  } else {
    $(".pnav--l, .pnav--r").css("opacity", 0);
  }



  if (scrolled > menuOffset) {
    // if scrolled past detach point add class to fix menu
    if (scrolled > detachPoint) {
      if (!$(".nav-wrapp").hasClass("detached")) {
        $(".nav-wrapp").addClass("detached");
      }
    }

    // hide/show menu
    if (scrolled > previousScroll) {
      // scrolling down; hide menu
      if (!$(".nav-wrapp").hasClass("invisible")) {
        $(".nav-wrapp").addClass("invisible");
      }
    } else {
      // if scrolling faster than hideShowOffset
      if (scrollDifference >= hideShowOffset) {
        // scrolling up; show menu
        if ($(".nav-wrapp").hasClass("invisible")) {
          $(".nav-wrapp").removeClass("invisible");
        }
      }
    }

  } else {
    // only remove “detached” class if user is at the top of document (menu jump fix)
    if (scrolled <= 0) {
      $(".nav-wrapp").removeClass("detached");

      if ($(".nav-wrapp").hasClass("invisible")) {
        $(".nav-wrapp").removeClass("invisible");
      }
    }
  }

  if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - pxrange) {
    if (label === "Index") {
      showHide("Close", 0);
    }
  } else {
    if (label === "Close") {
      showHide("Index", -400);
    }
  }

  // replace previous scroll position with new one
  previousScroll = scrolled;
});

$(".pnav--l, .pnav--r").click(function (e) {
  e.preventDefault();
  if (label === "Index") {
    showHide("Close", 0);
  } else {
    showHide("Index", -400);
  }
});
//});