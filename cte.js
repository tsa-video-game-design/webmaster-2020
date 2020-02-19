window.addEventListener("load", function() {
    setTimeout(function() {
        /* Maybe fade each layer in individually */
        $(".intro-hero-bg").animate({
            opacity: 0.7
        },1000);



    },1700);
    if (navigator.userAgent.indexOf("Android") > -1 || navigator.userAgent.indexOf("iPhone") > -1 || navigator.userAgent.indexOf("Mobile") > -1) {
        console.log("Starting sensor...");
        let sensor = new Accelerometer();
        sensor.start();
        /*
        sensor.onreading = () => {


            var setOffset = function(selector,left,top) {
                $(selector).css({top: top, left: left});
            }

            var Xdistance = ((sensor.x + 10) / 20);
            var Ydistance = ((sensor.x + 10) / 20);
            updateParallax(Xdistance,Ydistance);
        }*/
        window.ondevicemotion = function() {
            var Xdistance = ((sensor.x + 10) / 20);
            var Ydistance = ((sensor.x + 10) / 20);
            updateParallax(Xdistance,Ydistance);
        };
    }
});
function updateParallax(Xdistance, Ydistance) {
    var setOffset = function(selector,left,top) {
        $(selector).css({top: top, left: left});
    }
    setOffset(".bg1",Xdistance * 20,Ydistance * 20);
    setOffset(".bg2",Xdistance * 15,Ydistance * 15);
    setOffset(".bg3",Xdistance * 10,Ydistance * 10);
    setOffset(".bg4",Xdistance * 5,Ydistance * 5);
    setOffset(".bg5",Xdistance * -5,Ydistance * -5);
    setOffset(".bg6",Xdistance * -10,Ydistance * -10);
    setOffset(".bg7",Xdistance * -15,Ydistance * -15);
}
window.addEventListener("mousemove",function(e) {
    var Xdistance = -(1 - e.clientX / window.innerWidth);
    var Ydistance = (e.clientY / window.innerHeight);
    updateParallax(Xdistance,Ydistance);
});
