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
