console.log("Hello");

/*
 * Event: button onclick
 */

$('#myButton').click(function() {

    // get
    var inputText = $('#input').val();
    console.log("get text: " + inputText);

    // put
    var outputField = $('#output');
    outputField.text(inputText);

})

/*
 * Event: listen to key press
 */
$("body").keypress(function(event) {

    var which = event.which;

    console.log("key pressed, which = " + which);

    // if(which == ...){ ... }

});

/*
 * Timer
 */
var count = 0;
var timer = setInterval(function() {
    console.log("hi, " + count);
    window.count += 1;
    checkToStop();
}, 1000);

function checkToStop() {
    if (window.count >= 10) {
        clearInterval(window.timer);
    }
}
