// HIDE THE LLITTLE TAGGY DUDES
var $all = $("body");
$("form span").hide();

var $name = $("#name");
var $mail = $("#mail");
var $mailConfirm = $("#mail_confirm");
var $button = $(".btn");

//Abstracting the functions. Modular stuff... K. Whatever....
function nameLong () {
	return $name.val().length > 0;
}

function mailMatch() {
	return $mailConfirm.val().toLowerCase() === $mail.val().toLowerCase();
}

//combining both functions to determine whether the button can be used...
function testBoth () {
	return mailMatch() && nameLong();
}


function canButton() {
	$("#butt").prop('disabled', !testBoth());
}


//Hiding the taggy dudes depending on the length of input...


function testLength() {
	if (nameLong()) {
		$(this).next().hide();
	} else {
		$(this).next().show();
	}
}

//Function for determining whether email matches confirmation.

function emailConfirm () {
	if (mailMatch()) {
		$(".match").hide();
	} else {
		$(".match").show();
		$button.val("disabled");
	}
}

canButton();


$name.focus(testLength).keyup(testLength).keyup(canButton);
	
$mail.focus(emailConfirm).keyup(emailConfirm).keyup(canButton);

$mailConfirm.focus(emailConfirm).keyup(emailConfirm).keyup(canButton);