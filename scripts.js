window.onload = function() {
    setupNavigationControls();
    setupHoverTooltip();
};
function setupNavigationControls() {

    var collapseMenu = function(animation_speed) {
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
    };

    var expandMenu = function(animation_speed) {
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
    };

    menuShowing = false;
    $("#hamburger-btn").click(function(e) {
        var animation_speed = 170;
        if (menuShowing) {
            collapseMenu(animation_speed);
        } else {
            expandMenu(animation_speed);
        }
    });

    $("#nav-shade").click(function(e) {
        collapseMenu(170);
    })
}
function setupHoverTooltip() {
    var globalMouseX = 0;
    var globalMouseY = 0;
    function refreshTooltipPosition() {
        var target = document.getElementsByClassName("hover-tooltip")[0];
        if (globalMouseX > (document.body.clientWidth - target.clientWidth)) {
            target.style.left = (document.body.clientWidth - target.clientWidth + 1) + "px";
        } else {
            target.style.left = globalMouseX+"px";
        }
        target.style.top = (globalMouseY - target.clientHeight - 5)+"px";
    }
    window.onmousemove = function(e) {
        globalMouseX = e.clientX;
        globalMouseY = e.clientY;
        refreshTooltipPosition();
    };
    $(".hotspot").on("mouseenter", function(e) {
        var className = e.target.className.match(/^[^\s]+ ([^\s]+)/)[1];
        var title;
        var description;
        console.log(className);
        if (className == "hotspot-1") {
            title = "Advanced Mirror Cameras";
            description = `Cameras integrated into the mirrors allow the car to gain a full picture of the surroundings, including blind spots.`;
        } else if (className == "hotspot-2") {
            title = "Headlight Beam Forming";
            description = `This advanced technology integrates infared LEDs in the headlights along with the infared camera array to sense the road conditions around the vehicle.`;
        } else if (className == "hotspot-3") {
            title = "Roof-mounted radar";
            description = `Integrated lidar sensors in the spoiler of the car allow our advanced A.I. driving algorithms to identify road signs and objects far away.`;
        } else if (className == "hotspot-4") {
            title = "Infared Camera Array";
            description = `These cameras, integrated inside the grille, capture infared light beamed from the headlights. This allows the car to sense road conditions.`;
        } else {
            title = "Depth-sensing Tire Tread";
            description = `These depth-sensing tire treads automatically keep track of road terrain and train our A.I. model to better recognize and respond to road conditions as you drive.`;
        }

        $(".hover-tooltip h1").text(title);
        $(".hover-tooltip .tooltip-info").text(description);

        $(".hover-tooltip").show();
        $(".hover-tooltip").animate({
            opacity: 1
        }, {
            duration: 100
        });
    });
    $(".hotspot").on("mouseout", function(e) {
        $(".hover-tooltip").animate({
            opacity: 0
        }, {
            duration: 50
        });
    });
    $(".hotspot").on("click", function(e) {
        var className = e.target.className.match(/^[^\s]+ ([^\s]+)/)[1];

        var updateTexts = function(className) {
            var title;
            var description;
            if (className == "hotspot-1") {
                title = "Advanced Mirror Cameras";
                description = `Cameras integrated into the mirrors allow the car to gain a full picture of the surroundings, including blind spots.`;
            } else if (className == "hotspot-2") {
                title = "Headlight Beam Forming";
                description = `This advanced technology integrates infared LEDs in the headlights along with the infared camera array to sense the road conditions around the vehicle.`;
            } else if (className == "hotspot-3") {
                title = "Roof-mounted radar";
                description = `Integrated lidar sensors in the spoiler of the car allow our advanced A.I. driving algorithms to identify road signs and objects far away.`;
            } else if (className == "hotspot-4") {
                title = "Infared Camera Array";
                description = `These cameras, integrated inside the grille, capture infared light beamed from the headlights. This allows the car to sense road conditions.`;
            } else {
                title = "Depth-sensing Tire Tread";
                description = `These depth-sensing tire treads automatically keep track of road terrain and train our A.I. model to better recognize and respond to road conditions as you drive.`;
            }
            $(".mobile-tooltip h1").text(title);
            $(".mobile-tooltip .mobile-tooltip-info").text(description);
        };

        if ($(".mobile-tooltip .intro").is(":visible")) {
            $(".mobile-tooltip .intro").fadeOut(200, function() {
                updateTexts(className);
                $(".mobile-tooltip h1").fadeIn(200);
                $(".mobile-tooltip .mobile-tooltip-info").fadeIn(200);
            });
        } else {
            $(".mobile-tooltip h1, .mobile-tooltip .mobile-tooltip-info").fadeOut(200, function() {
                updateTexts(className);
                $(".mobile-tooltip h1, .mobile-tooltip .mobile-tooltip-info").fadeIn(200);
            })
        }
    });
}
