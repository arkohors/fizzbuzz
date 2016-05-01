$(document).ready(function () {

	// var input = prompt('Please pick a number'); // user inputs a value via prompt 

	$('.fb-button').click(function () { // when I click on a button of class fb-button...

		var input = parseInt($('.fb-input').val()); // converts '22' to 22 etc.

		if (input && typeof input == 'number') { // if input is not empty and if input is a number

			message('.fb-message', 'You entered number ' + input + '.', 'green');
			fizzBuzz(input);

		} else {

			message('.fb-message', 'Please enter a valid integer!', 'red');

		}

	});

});

function fizzBuzz(yourNumber) {
for (var i =1; i <=yourNumber; i++) {
	if ((i % 3 ===0) && (i % 5 === 0)) {
		$(".fb-list").append('<li>' + 'Fizz Buzz' + '</li>');
	}
	else if ((i % 5) === 0) {
		$(".fb-list").append('<li>' + 'Buzz' + '</li>');
	}
	else if ((i % 3) === 0) {
		$(".fb-list").append('<li>' + 'Fizz' + '</li>');
	}
	else {
		$(".fb-list").append('<li>' + i + '</li>');
	};
};

};
function message(element, text, color) {
	$(element)
		.text(text)
		.css('color', color)
		.css('border', '1px solid ' + color)
		.css('padding', '20px')
		.css('text-align', 'center');
}