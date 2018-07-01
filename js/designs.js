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

    for (var k = 0; k < rows; k++) {
		var row = $('<tr></tr>').appendTo("table");
		for (var j = 0; j < cols; j++) {
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