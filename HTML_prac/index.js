var nam = document.getElementById("Name")

var cmt = document.getElementById( "txtarea" )


var btn = document.getElementById("submit")


btn.addEventListener( 'click', function( ) {
    console.log( "click")
    if ( nam.value == ""  ) {
        alert("name should not be empty")
        nam.focus();
    }
    else if ( cmt.value == ""  ) {
        alert("comment should not be empty")
        cmt.focus();
    }
    else {
        alert("submited")
    }
} )