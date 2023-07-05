const gameboardGrid = document.getElementById("gameboard");
const turnElement = document.getElementById("turn");
let turnSpan = document.getElementById("turn-span");

const Gameboard = (() => {
    let gameboard = [];

    for (let i = 0; i < 9; i++) {
        gameboard.push("");
    }

    const render = () => {
        gameboard.forEach((tile, index) => {
            let createdTile = document.createElement("div");
            createdTile.classList = "tile";
            createdTile.setAttribute("id", `tile-${index+1}`);
            createdTile.innerHTML = tile;
            gameboardGrid.appendChild(createdTile);
        })

        const tiles = document.querySelectorAll(".tile");
        tiles.forEach((tile) => {
            tile.addEventListener("click", Game.handleClick);
        })
    }

    return {
        render
    }
})();

const Game = (() => {
    const players = ["Blue", "Red"];
    let turn = "Blue";
    let gameover = false;

    const start = () => {
        if (!turnElement.style.opacity == 1) {
            turnElement.style.opacity = 1;
        }
        Gameboard.render();
    }

    const clear = () => {
        gameboardGrid.innerHTML = "";
    }

    const handleClick = (event) => {
        console.log(event.target.id.split("-"));

        if (turn == "Blue" && event.target.innerHTML == "") {
            event.target.innerHTML = "O";
            event.target.style.display = "flex";
            event.target.style.justifyContent = "center";
            event.target.style.alignItems = "center";
            event.target.style.fontSize = "100px";
            event.target.style.color = "blue";

            turn = "Red";
            turnSpan.innerHTML = "Red";
            turnSpan.style.color = "red";
        }
        else if (turn == "Red" && event.target.innerHTML == "") {
            event.target.innerHTML = "X";
            event.target.style.display = "flex";
            event.target.style.justifyContent = "center";
            event.target.style.alignItems = "center";
            event.target.style.fontSize = "100px";
            event.target.style.color = "red";

            turn = "Blue";
            turnSpan.innerHTML = "Blue";
            turnSpan.style.color = "blue";
        }

        Game.checkGameover();
    }

    const checkGameover = () => {
        // Doit check si ya une ligne de 3 ou égalité
    }
    
    return {
        start,
        clear,
        handleClick,
        checkGameover
    }
})();

const startButton = document.getElementById("start-btn");
startButton.addEventListener("click", () => {
    if (!gameboardGrid.hasChildNodes()) {
        Game.start();
    }
})

const clearButton = document.getElementById("clear-btn");
clearButton.addEventListener("click", () => {
    if (gameboardGrid.hasChildNodes()) {
        Game.clear();
    }
})