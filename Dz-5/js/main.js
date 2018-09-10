var div;
var board = document.querySelector(".board");
var letters = [, "A", "B", "C", "D", "E", "F", "G", "H"];


for (var i = 0; i < 8; i++) {
	for (var j = 0; j < 4; j++) {
		if (i % 2 == 0) {
			div = document.createElement("div");
			div.classList.add("cell", "black");
			board.appendChild(div);

			div = document.createElement("div");
			div.classList.add("cell", "white");
			board.appendChild(div);
		} else {
			div = document.createElement("div");
			div.classList.add("cell", "white");
			board.appendChild(div);

			div = document.createElement("div");
			div.classList.add("cell", "black");
			board.appendChild(div);
		}
	}
}

var cells = document.querySelectorAll(".cell");
var c = 0;
for (i = 1; i < 9; i++) {
	for (j = 1; j < 9; j++) {
		cells[c++].classList.add(letters[i]+j);//добавляем класс с номером ячейки
	}
}

//пешки
for(i=1;i<9;i++){
document.getElementsByClassName(letters[i]+2)[0].classList.add("whitePawn");
}
for(i=1;i<9;i++){
document.getElementsByClassName(letters[i]+7)[0].classList.add("blackPawn");
}
