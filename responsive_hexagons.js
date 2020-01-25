function recalculateAllHexagonPositions() {
    var x = window.innerWidth;
    document.getElementsByClassName("hotspot-1")[0].style.left = (0.0033149 * x + 37.656906)+"%";
    document.getElementsByClassName("hotspot-1")[0].style.top = (0.0044198 * x + 36.542541)+"%";

    document.getElementsByClassName("hotspot-2")[0].style.left = (0.00333333 * x + 58.93333333)+"%";
    document.getElementsByClassName("hotspot-2")[0].style.top = (0.0058333 * x + 50.333344)+"%";

    //FIX THE EQUATION FOR THIS!!!
    document.getElementsByClassName("hotspot-3")[0].style.left = (0.0078125 * x + 28.5)+"%";
    document.getElementsByClassName("hotspot-3")[0].style.top = (0.0083333 * x + 23.33333)+"%";

    document.getElementsByClassName("hotspot-4")[0].style.left = (0.00427083 * x + 74.733333)+"%";
    document.getElementsByClassName("hotspot-4")[0].style.top = (0.00625 * x + 58)+"%";

    document.getElementsByClassName("hotspot-5")[0].style.left = (0.0047961 * x + 17.466666)+"%";
    document.getElementsByClassName("hotspot-5")[0].style.top = (0.00625 * x + 56)+"%";
}
$(document).ready(function() {
    recalculateAllHexagonPositions();
    window.addEventListener('resize',function(data) {
        console.log(window.innerWidth);
        recalculateAllHexagonPositions();
    })
});
