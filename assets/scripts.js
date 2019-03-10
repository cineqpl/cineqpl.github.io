$(document).ready( function() {

    $(".project").click(function() {
        window.open($(this).find("a:first").attr("href"));
        return false;
    });

    $(".project").hover(function() {
        window.status = $(this).find("a:first").attr("href");
    }, function() {
        window.status = "";
    }),

    $("#aboutmelink").click(function () {
        $('html, body').animate({
            scrollTop: $("#aboutme").offset().top
        }, 500)
    });

    $("#projectslink").click(function() {
        $('html, body').animate({
            scrollTop: $("#projects").offset().top
        }, 800)
    });

    $("#mymedialink").click(function () {
        $('html, body').animate({
            scrollTop: $("#mymedia").offset().top
        }, 800)
    });

});