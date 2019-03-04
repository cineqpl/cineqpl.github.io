$(document).ready( function() {

    $(".project").click(function() {
        window.open($(this).find("a:first").attr("href"));
        return false;
    });

    $(".project").hover(function() {
        window.status = $(this).find("a:first").attr("href");
    }, function() {
        window.status = "";
    });
});