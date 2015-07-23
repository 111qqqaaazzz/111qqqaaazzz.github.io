var timer;
var count;
$('#my_button').click(function(){
    clearInterval(window.timer);
    window.count = 60;
    window.timer = setInterval(function() {
    console.log(count);
    if(window.count==60){
        var word = $('#output');
        word.html("1:00");
        window.count -= 1;
        checkToStop();
    }
    else if(window.count>=10){
        var word = $('#output');
        word.html("0:"+count);
        window.count -= 1;
        checkToStop();
    }
    else{
        var word = $('#output');
        word.html("0:0"+count);
        window.count -= 1;
        checkToStop();
    }
}, 1000);
    
})

function checkToStop() {
    if (window.count < 0) {
        clearInterval(window.timer);
    }
    
}
$("body").keypress(function(event) {

    var which = event.which;

    console.log("key pressed, which = " + which);
});
