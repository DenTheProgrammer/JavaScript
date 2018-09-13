var active = 1;

document.querySelector(".next").addEventListener("click", function () {
	active = (active) % 3 + 1;
	document.querySelector(".active").classList.toggle("active");
	document.querySelector("#img" + active).classList.toggle("active");
})


document.querySelector(".prev").addEventListener("click", function () {
	if (active > 1) {
		active -= 1
	} else {
		active = 3;
	}
	document.querySelector(".active").classList.toggle("active");
	document.querySelector("#img" + active).classList.toggle("active");
})

