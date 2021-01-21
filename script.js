// Note: Because "defer" is added to the script tag in HTML this javascript file will be executed after the page is loaded/parsed.

$(function() {
	// Note: this functions calls itself.
	
    $(".draggable").draggable({});
	// Note: this makes all objects with the class "draggable" draggalbe ;-)
	// Options/ Settings go inbetween {}
	
	$('.play').each(function() {
		// Note: Get all the elements with the class "play" in the HTML document.
		
		let audio = jQuery(this).find('audio').first();
		// Note: Query the first audio element within this .play element.
		
		let button = jQuery(this).find('.button').first();
		// let count = jQuery(this).find('.count').first();
		// Note: Same as above but for the "button" and "count" class.
		
	document.addEventListener('keyup', event => {
  		if (event.code === 'Space') {
  		audio[0].pause();
    	console.log('Space pressed')
  		}
	})

		button.on('mouseenter', function() {
			// Note: Mouse enter on the .button element, starts playing the audio, sets the audio position to the beginning (0:00) and adds the "playing" class to the button element.
			audio[0].play();
			// audio.currentTime = 0;
			button.addClass('playing');
		});
		
		button.off('onmouseover');
		// Note: Remove existing event listeners, count bug fix.
		
		// button.on('mouseleave + draggable', function() {
		// 	// Note: Mouse leave on the .button element, pauses the playing audio, add 1 to count, and removes "playing" class from the button element.
		// 	if (onclick = true){
		// 	audio[0].pause();
		// 	button.removeClass('playing');
		// 	// countUp(count);
		// }

		});
	});
// });

// var e = document.getElementById('icon');
// e.onmouseover = function() {
//   document.getElementById('info').style.display = 'block';
// }
// e.onmouseout = function() {
//   document.getElementById('info').style.display = 'none';
// }
