var active = 1;
var timer;
autoSwitch();


function autoSwitch() {
	timer = setInterval(function () {
			document.querySelector(".next").click();
		},
		7000);
}


document.querySelector(".slider-container").onclick = function (e) {
	if (e.target.classList[0] === "next") { //листаем вперед
		active = (active) % 3 + 1;
	} else if (e.target.classList[0] === "prev") { //назад
		if (active > 1) {
			active -= 1
		} else {
			active = 3;
		}
	}
	document.querySelector(".active").classList.toggle("active");
	document.querySelector("#img" + active).classList.toggle("active");
	clearInterval(timer); //сброс таймера при клике пользователя
	autoSwitch();
}
