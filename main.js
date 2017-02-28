new WOW().init();

//scrolling to a div
$(".scroll-to").on("click", function(e) {
    e.preventDefault();
    $("body, html").animate({
        scrollTop: $($(this).attr('href')).offset().top
    }, 1500);

});
