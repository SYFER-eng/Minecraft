// game.js
const gameGrid = document.getElementById("game-grid");
const tiles = gameGrid.querySelectorAll(".tile");

let currentPlayer = "player1";
let currentPlayerColor = "#FFC533"; // yellow

tiles.forEach((tile) => {
	tile.addEventListener("click", (e) => {
		if (tile.classList.contains("active")) {
			// Already active, so deactivate
			tile.classList.remove("active");
		} else {
			// Not active, so activate
			tile.classList.add("active");
			tile.style.backgroundColor = currentPlayerColor;
		}
	});
});