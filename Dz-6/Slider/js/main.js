var active = 1;
var timer;
autoSwitch();


function autoSwitch() {
    timer = setInterval(function () {
            document.querySelector(".next").click();
        },
        7000);
}

var imgNumber = document.querySelectorAll(".slider img").length;
document.querySelector(".slider-container").onclick = function (e) {
    if (e.target.classList[0] === "next") { //листаем вперед
        active = (active) % imgNumber + 1;
    } else if (e.target.classList[0] === "prev") { //назад
        if (active > 1) {
            active -= 1
        } else {
            active = imgNumber;
        }
    }
    //переключение слайдов
    document.querySelectorAll(".active")[0].classList.toggle("active");
    document.querySelectorAll(".img" + active)[0].classList.toggle("active");
    //переключение превьюшек
    document.querySelectorAll(".active")[1].classList.toggle("active");
    document.querySelectorAll(".img" + active)[1].classList.toggle("active");
    clearInterval(timer); //сброс таймера при клике пользователя
        autoSwitch();
}



//переключение по нажатию превью
document.querySelector(".buttons").addEventListener("click", function (e) {
    if (e.target.tagName === "IMG") {
        active = e.target.classList[0][3];

        //переключение слайдов
        document.querySelectorAll(".active")[0].classList.toggle("active");
        document.querySelectorAll(".img" + active)[0].classList.toggle("active");
        //переключение превьюшек
        document.querySelectorAll(".active")[1].classList.toggle("active");
        document.querySelectorAll(".img" + active)[1].classList.toggle("active");
    }
})
