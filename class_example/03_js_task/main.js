$('#myButton').click(function() {

    console.log("button is clicked");

    // get
    var inputText = $('#input').val();
    var n = parseInt(inputText);
    console.log("get n: " + n);

    var s = "";
    for(var i=0 ; i<n ; i++) {
        for(var j=0 ; j<=i ; j++) {
            s += "*";
        }
        s += "<br />";
    }

    // put
    var outputField = $('#output');
    outputField.html(s);

})

