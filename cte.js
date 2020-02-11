window.onload = function() {
    setTimeout(function() {
        /* Maybe fade each layer in individually */
        $(".intro-hero-bg").animate({
            opacity: 0.7
        },1000);
    },1700);
};
window.onmousemove = function(e) {
    var setOffset = function(selector,left,top) {
        $(selector).css({top: top, left: left});
    }

    var Xdistance = -(1 - e.clientX / window.innerWidth);
    var Ydistance = (e.clientY / window.innerHeight);
    console.log(Ydistance);
    setOffset(".bg1",Xdistance * 20,Ydistance * 20);
    setOffset(".bg2",Xdistance * 15,Ydistance * 15);
    setOffset(".bg3",Xdistance * 10,Ydistance * 10);
    setOffset(".bg4",Xdistance * 5,Ydistance * 5);
    setOffset(".bg5",Xdistance * -5,Ydistance * -5);
    setOffset(".bg6",Xdistance * -10,Ydistance * -10);
    setOffset(".bg7",Xdistance * -15,Ydistance * -15);
}
