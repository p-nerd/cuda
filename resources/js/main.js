$(document).ready(function () {

	//STICKY MENU
	$(".js--services-section").waypoint(function (direction) {
		if (direction == "down") {
			$("nav").addClass("sticky")
		} else {
			$("nav").removeClass("sticky")
		}
	});

	//MIXITUP (PORTFOLIO SECTION)
	var mixer = mixitup('.filter-container');
});

function openNav() {
	document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
	document.getElementById("myNav").style.width = "0%";
}