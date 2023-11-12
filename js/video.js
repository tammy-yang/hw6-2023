var video; // set outside of the function so it can be used several times

// Initialize the video element and turn off autoplay and turn off looping.
// Play the video and update the volume information.
window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video = document.querySelector("#player1");
	video.autoplay = false;
	video.loop = false;
	console.log('auto play is set to ' + video.autoplay);
	console.log('loop is set to ' + video.loop);
});

// Play the video and update the volume information.  
playButton = document.querySelector("#play");
playButton.addEventListener("click", function() {
	video.play();
	console.log("Play Video");
	document.querySelector('#volume').innerHTML = slider.value + '%';
	console.log("volume: " + video.volume);
});

// Pause the video
pauseButton = document.querySelector("#pause");
pauseButton.addEventListener('click', function() {
	video.pause();
	console.log("Pause Video");
});

// Slow the current video speed by 10% each time the button is clicked and log the new speed to the console.
slowButton = document.querySelector('#slower');
slowButton.addEventListener('click', function() {
	video.playbackRate *= 0.9;
	console.log("Speed is " + video.playbackRate);
});

// Increase the current video speed each time the button is clicked and log the new speed to the console.
fastButton = document.querySelector('#faster');
fastButton.addEventListener('click', function() {
	video.playbackRate /= 0.9;
	console.log("Speed is " + video.playbackRate);
})

// Advance the current video by 10 seconds.  
// If the video length has been exceeded go back to the start of the video
// Log the current location of the video.
skipButton = document.querySelector('#skip');
skipButton.addEventListener('click', function() {
	if (video.currentTime + 10 > video.duration) {
		video.currentTime = 0;
		video.pause();
	}
	else {
		video.currentTime += 10;
	}
	console.log('Current time: ' + video.currentTime);
})

// Mute/unmute the video and update the text in the button.
muteButton = document.querySelector('#mute');
muteButton.addEventListener('click', function() {
	if (video.muted === false) {
		video.muted = true;
		document.querySelector('#mute').innerHTML = 'Unmute';
		console.log('The video is muted');
	} else {
		video.muted = false;
		document.querySelector('#mute').innerHTML = 'Mute';
		console.log('The video is unmuted');
	}
})

// Change the volume based on the slider and update the volume information
slider = document.querySelector('#slider');
slider.addEventListener('change', function() {
	video.volume = slider.value / 100;
	console.log('Volume is ' + video.volume);
	document.querySelector('#volume').innerHTML = slider.value + '%';
})

// Utilize the existing oldSchool class on the video element
oldSchool = document.querySelector('#vintage');
oldSchool.addEventListener('click', function() {
	video.classList.add("oldSchool");
	console.log('Old School style');
})

// Remove the oldSchool class from the video
original = document.querySelector('#orig');
original.addEventListener('click', function() {
	video.classList.remove("oldSchool");
	console.log('Original style');
})


// document.querySelector("#play").addEventListener("click", function() {
// 	console.log("Play Video");
// });

