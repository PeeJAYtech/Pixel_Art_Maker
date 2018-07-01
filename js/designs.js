// Select color input

// Select size input

// When size is submitted by the user, call makeGrid()
var colour;
function makeGrid() {

var height = $("#height").val();
var width = $("#width").val();
colour = $("#colorPicker").val();
 console.log("height: " + height +" Weight: "+ width+ " Color: "+ colour);
 makeRowCol(height,width);
}

/*
 @cols numbers of rows
 @rows numbers of column
 @ returns a rows and column 
*/
function makeRowCol(rows,cols){

    for (var m = 0; m < rows; m++) {
		var row = $('<tr></tr>').appendTo("table");
		for (var n = 0; n < cols; n++) {
			$('<td></td>').appendTo(row);
		}
}
}
function clearGrid(){
$("table").html("");
}


$("#btnClick").click(function(event){
event.preventDefault();
clearGrid();
makeGrid();

});

$("table").on("click","td",function(event){
event.preventDefault();
color = $("#colorPicker").val();
$(this).css("background-color", colour);
console.log(colour);
})
