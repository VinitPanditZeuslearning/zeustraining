var nam = document.getElementById("Name")

var cmt = document.getElementById( "txtarea" )


var btn = document.getElementById("submit")


btn.addEventListener( 'click', function( ) {
    console.log( "click")
    if ( nam.value == "" || cmt.value == ""  ) {
        alert("name and comment should not be empty")
    }
    else {
        alert("submited")
    }
} )