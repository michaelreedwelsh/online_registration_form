// HIDE THE LLITTLE TAGGY DUDES
var $all = $("body");
$("form span").hide();


function testLength() {
	if ($(this).val().length > 8) {
		$(this).next().hide();
	} else {
		$(this).next().show();
	}
}

//Hiding the taggy dudes depending on the length of input...

$("#name").focus(testLength).keyup(testLength);
	
$("#mail").focus(testLength).keyup(testLength);
