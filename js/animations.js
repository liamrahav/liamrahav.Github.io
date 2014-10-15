$(document).ready(function(){
    $("#spoilerbutton").toggle(
        function(){
            $('#spoiler').fadeIn(500);
        },
        function(){
            $('#spoiler').fadeOut(500);
    });
});
$(document).ready(function() {
   $('#scroller').localScroll({duration:800});
});