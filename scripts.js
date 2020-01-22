window.onload = function() {
    setupNavigationControls();
};
function setupNavigationControls() {
    menuShowing = false;
    $("#hamburger-btn").click(function(e) {
        var animation_speed = 170;
        if (menuShowing) {

            $("#nav-expanded").animate({
                left: "-3em",
                opacity: "0"
            },animation_speed,function() {
                $("#nav-expanded").hide();
            });
            $("#nav-shade").animate({
                opacity: "0"
            },animation_speed,function() {
                $("#nav-shade").hide();
            });
            menuShowing = false;
        } else {
            $("#nav-expanded").show();
            $("#nav-expanded").animate({
                left: "0em",
                opacity: "1"
            },animation_speed);
            $("#nav-shade").show();
            $("#nav-shade").animate({
                opacity: "0.65"
            },animation_speed);
            menuShowing = true;
        }
    });
}
