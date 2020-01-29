window.onload = function() {
    setupNavigationControls();
    setupHoverTooltip();
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
function setupHoverTooltip() {
    window.onmousemove = function(e) {
        var target = document.getElementsByClassName("hover-tooltip")[0];
        if (e.clientX > (document.body.clientWidth - target.clientWidth)) {
            target.style.left = (document.body.clientWidth - target.clientWidth + 1) + "px";
        } else {
            target.style.left = e.clientX+"px";
        }
        target.style.top = (e.clientY - target.clientHeight - 5)+"px";
    }
    $(".hotspot").on("mouseenter", function(e) {
        $(".hover-tooltip").show();
    });
    $(".hotspot").on("mouseout", function(e) {
        $(".hover-tooltip").hide();
    });
}
