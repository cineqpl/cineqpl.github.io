$(document).ready( function() {

    $("#bloglink").click(function () {
        window.open($(this).find("a:first").attr("href"));
        return false;
    });

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

    $("#bloglink").click(function () {
        window.open($(this).find("a:first").attr("href"));
        return false;
    });

    $("#mymedialink").click(function () {
        $('html, body').animate({
            scrollTop: $("#mymedia").offset().top
        }, 800)
    });

});

window.onload = function() {

    var fullTitle1 = document.getElementById("maintitle1").innerHTML;
    var fullTitle2 = document.getElementById("maintitle2").innerHTML;

    var loadTitle1 = "";
    var loadTitle2 = "";

    var triggerSecond = 70 * fullTitle1.length;

    document.getElementById("maintitle1").innerHTML = loadTitle1;
    document.getElementById("maintitle2").innerHTML = loadTitle2;

    function doSetTimeout1(i) {
        setTimeout(function () {
            loadTitle1 += fullTitle1.charAt(i);
            document.getElementById("maintitle1").innerHTML = loadTitle1;
        }, i*70);
    }

    for(let i = 0; i < fullTitle1.length; i++) {
        doSetTimeout1(i);
    }

    function doSetTimeout2(i) {
        setTimeout(function () {
            loadTitle2 += fullTitle2.charAt(i);
            document.getElementById("maintitle2").innerHTML = loadTitle2;
        }, triggerSecond + i*35);
    }

    for(let i = 0; i < fullTitle2.length; i++) {
        doSetTimeout2(i);
    }

}