var div;
var board = document.querySelector("div.board");
for (var i = 0; i < 64; i++) {
	div = document.createElement("div");
	div.className = "cell";
	board.appendChild(div);
}
