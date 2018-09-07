var div;
var board = document.querySelector("div.board");
var letters = [, "A", "B", "C", "D", "E", "F", "G", "H"];


for (var i = 0; i < 8; i++) {
	for (var j = 0; j < 4; j++) {
		if (i % 2 == 0) {
			div = document.createElement("div");
			div.classList.add("cell", "white");
			board.appendChild(div);

			div = document.createElement("div");
			div.classList.add("cell", "black");
			board.appendChild(div);
		} else {
			div = document.createElement("div");
			div.classList.add("cell", "black");
			board.appendChild(div);

			div = document.createElement("div");
			div.classList.add("cell", "white");
			board.appendChild(div);
		}
	}
}
var k=3;
for (i = 1; i < 9; i++) {
	for (j = 1; j < 9; j++) {
		board.childNodes[k++].classList.add(letters[i]+j);
	}
}
