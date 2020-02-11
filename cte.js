window.onload = function() {
    setTimeout(function() {
        /* Maybe fade each layer in individually */
        $(".intro-hero-bg").animate({
            opacity: 0.7
        },1000);
    },1700);

    let sensor = new Accelerometer();
    sensor.start();
    sensor.onreading = () => {
        /* X RANGE: -10 <= x <= 10 */
        console.log("Acceleration along X-axis: " + sensor.x);
        /* Y RANGE: -10 <= y <= 10 */
        console.log("Acceleration along Y-axis: " + sensor.y);
        console.log("Acceleration along Z-axis: " + sensor.z);


        var setOffset = function(selector,left,top) {
            $(selector).css({top: top, left: left});
        }

        var Xdistance = ((sensor.x + 10) / 20);
        var Ydistance = ((sensor.x + 10) / 20);
        setOffset(".bg1",Xdistance * 20,Ydistance * 20);
        setOffset(".bg2",Xdistance * 15,Ydistance * 15);
        setOffset(".bg3",Xdistance * 10,Ydistance * 10);
        setOffset(".bg4",Xdistance * 5,Ydistance * 5);
        setOffset(".bg5",Xdistance * -5,Ydistance * -5);
        setOffset(".bg6",Xdistance * -10,Ydistance * -10);
        setOffset(".bg7",Xdistance * -15,Ydistance * -15);
    }
};
window.onmousemove = function(e) {
    var setOffset = function(selector,left,top) {
        $(selector).css({top: top, left: left});
    }

    var Xdistance = -(1 - e.clientX / window.innerWidth);
    var Ydistance = (e.clientY / window.innerHeight);
    setOffset(".bg1",Xdistance * 20,Ydistance * 20);
    setOffset(".bg2",Xdistance * 15,Ydistance * 15);
    setOffset(".bg3",Xdistance * 10,Ydistance * 10);
    setOffset(".bg4",Xdistance * 5,Ydistance * 5);
    setOffset(".bg5",Xdistance * -5,Ydistance * -5);
    setOffset(".bg6",Xdistance * -10,Ydistance * -10);
    setOffset(".bg7",Xdistance * -15,Ydistance * -15);
}
