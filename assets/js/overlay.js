
const images = document.querySelectorAll(".image");
const overlays = document.querySelectorAll(".overlay");
const closeBtns = document.querySelectorAll('.close');

// Open the corresponding overlay when an image is clicked
for (let i = 0; i < images.length; i++) {
	console.log('aaajajjajjajjajjaja');
	images[i].addEventListener ('click', function() {
		overlays[i].style.display = "block";
	})
}

// Close the corresponding overlay when the close button is clicked
for (let i = 0; i < closeBtns.length; i++) {
	closeBtns[i].addEventListener ('click', function() {
		overlays[i].style.display = "none";
	})
}

// Close the overlay when the user clicks outside of it
window.onclick = function(event) {
	for (let i = 0; i < overlays.length; i++) {
		if (event.target == overlays[i]) {
			overlays[i].style.display = "none";
		}
	}
}
