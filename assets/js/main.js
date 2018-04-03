//jQuery(function ($) {
//InstantClick.init(50);
$(".project-content").fitVids();
// $(function () {
//   FastClick.attach(document.body);
// });

var pxrange = 100,
  scrolled = 0,
  label = "Index",
  value = -1000;


// function showHide(l, v, d, t) {
//   $(".project-nav--thumbs").animate({
//     bottom: v
//   }, t, "ease-in-out");
//   setTimeout(function () {
//     $(".pnav--l, .pnav--r").text(l);
//     label = l;
//     value = v;
//   }, d);
// }

// $(window).scroll(function () {
//   scrolled = $(window).scrollTop();

//   if (scrolled > pxrange) {
//     $(".pnav--l, .pnav--r").css("opacity", 1);
//   } else {
//     $(".pnav--l, .pnav--r").css("opacity", 0);
//   }

//   if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - pxrange) {
//     console.log("bottom");
//     if (label === "Index") {
//       showHide("Close", 0, 0, 400);
//     }
//   } else {
//     if (label === "Close") {
//       showHide("Index", -1000, 0, 400);
//     }
//   }
// });

// $(".pnav--l, .pnav--r").click(function (e) {
//   e.preventDefault();
//   console.log("clic");
//   if (label === "Index") {
//     showHide("Close", 0, 240, 280);
//     console.log("aperta");
//   } else {
//     showHide("Index", -1000, 0, 280);
//     console.log("chiusa");
//   }
// });
//});