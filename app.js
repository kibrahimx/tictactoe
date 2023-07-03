const gameboardGrid = document.getElementById("gameboard");

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
    let gameover = false;

    const start = () => {
        Gameboard.render();
    }

    const handleClick = (event) => {
        console.log(event.target.id.split("-"));
    }

    return {
        start,
        handleClick
    }
})();

const startButton = document.getElementById("start-btn");
startButton.addEventListener("click", () => {
    Game.start();
})