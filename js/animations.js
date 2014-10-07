var scrollY = 0;
var distance = 875;
var speed = 24;
function autoScrollTo(el) {
    "use strict";
    var currentY = window.pageYOffset, targetY = document.getElementById(el).offsetTop, bodyHeight = document.body.offsetHeight, yPos = currentY + window.innerHeight, animator = setTimeout('autoScrollTo(\' ' + el + ' \')', speed);
    if (yPos > bodyHeight) {
        clearTimeout(animator);
    } else {
        if (currentY < targetY - distance) {
            scrollY = currentY + distance;
            window.scroll(0, scrollY);
        } else {
            clearTimeout(animator);
        }
    }
                
                
}