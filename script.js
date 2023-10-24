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

const player = document.createElement("div");
        player.className = "player";
        let playerRow = 1;
        let playerCol = 1;

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
        }
    }
