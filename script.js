const maze = [
    "#########",
    "#S      #",
    "#  #  # #",
    "# # #   #",
    "#   #   #",
    "# # # # #",
    "#       #",
    "#   #   #",
    "#E      #",
    "#########"
];

const mazeElement = document.getElementById("maze");

function createMaze() {
    for (let row = 0; row < maze.length; row++) {
        for (let col = 0; col < maze[row].length; col++) {
            const cell = document.createElement("div");
        }
    }
}

const player = document.createElement("div");
        player.className = "player";
        let playerRow = 1;
        let playerCol = 1;
        mazeElement.appendChild(player);



        function movePlayer(e) {
            const key = e.key;
            const UpdatedRow = playerRow;
            const UpdatednewCol = playerCol;


        if (key === "ArrowUp") {
            UpdatedRow--;
        } else if (key === "ArrowDown") {
            UpdatedRow++;
        } else if (key === "ArrowLeft") {
            UpdatednewCol--;
        } else if (key === "ArrowRight") {
            UpdatednewCol++;
        }

        if (maze[UpdatedRow][UpdatednewCol] !== "#") {
            player.style.top = UpdatedRow * 30 + "px";
            player.style.left = UpdatednewCol * 30 + "px";
            playerRow = UpdatedRow;
            playerCol = UpdatednewCol;

            if (maze[UpdatedRow][UpdatednewCol] === "E") {
                alert("Well done, you have fount the exit");
            }
        }
    }
