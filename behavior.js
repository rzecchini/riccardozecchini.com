// make intro-img fixed
$(".intro-img").css("position","fixed");

//unveil imgs
$("img").unveil(400);

//animate anchor links
var $root = $("html, body");
$("a").click(function () {
    var href = $.attr(this, "href");
    $root.animate({
        scrollTop: ($(href).offset().top) - 100
    }, 500, function () {
        window.location.hash = href;
    });
    return false;
});

//fit vids for responsive videos
$(".video-container").fitVids();

//reveal menu bar on scroll
var previousScroll = 0, // previous scroll position
    menuOffset = 104, // height of menu (once scroll passed it, menu is hidden)
    detachPoint = 800, // point of detach (after scroll passed it, menu is fixed)
    hideShowOffset = 60; // scrolling value after which triggers hide/show menu

// on scroll hide/show menu, assign active to current prj, sticky intro-img
$(window).scroll(function () {
    var currentScroll = $(this).scrollTop(), // gets current scroll position
        scrollDifference = Math.abs(currentScroll - previousScroll); // calculates how fast user is scrolling
    
    // assign active to current prj
    $('.single-project').each(function(i) {
        if ($(this).position().top <= currentScroll) {
            $('.projects-nav-link.active').removeClass('active');
            $('.projects-nav-link').eq(i).addClass('active');
       }
    });

    if (currentScroll <= 600) {
        $('.projects-nav-link.active').removeClass('active');
    }
    
    // sticky intro-img
    if (currentScroll > 400) {
        $(".intro-img").css("position","absolute");
        $(".intro-img").css("top",400);
    } else {
        $(".intro-img").css("position","fixed");
        $(".intro-img").css("top",0);
    }
    
    // if scrolled past menu
    if (currentScroll > menuOffset) {
        // if scrolled past detach point add class to fix menu
        if (currentScroll > detachPoint) {
            if (!$(".site-header").hasClass("detached")) {
                $(".site-header").addClass("detached");
            }
        }

        // hide/show menu
        if (currentScroll > previousScroll) {
            // scrolling down; hide menu
            if (!$(".site-header").hasClass("invisible")) {
                $(".site-header").addClass("invisible");
            }
        } else {
            // if scrolling faster than hideShowOffset
            if (scrollDifference >= hideShowOffset) {
                // scrolling up; show menu
                if ($(".site-header").hasClass("invisible")) {
                    $(".site-header").removeClass("invisible");
                }
            }
        }
    } else {
        // only remove “detached” class if user is at the top of document (menu jump fix)
        if (currentScroll <= 0) {
            $(".site-header").removeClass("detached");
            
            if ($(".site-header").hasClass("invisible")) {
                    $(".site-header").removeClass("invisible");
                }
        }
    }

    // if user is at the top of document show menu
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        $(".site-header").removeClass("invisible");
    }

    // replace previous scroll position with new one
    previousScroll = currentScroll;
});

// prepend a number before every project
var prjNum = 1;

$(".project-title").each( function (){
    $(this).prepend(prjNum);
    prjNum += 1;
});

