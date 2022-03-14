const gameContainer = document.getElementById("gameContainer");
const backgroundCanvas = document.getElementById("backgroundCanvas");
const holdBoard = document.getElementById("holdBoard");
const mainBoard = document.getElementById("mainBoard");
const nextBoard = document.getElementById("nextBoard");
mainBoard.grid = mainBoard.getElementById("grid");
mainBoard.minoGroup = mainBoard.getElementById("minoGroup");
mainBoard.activeGroup = mainBoard.getElementById("activeGroup");

const containerSize = 90;
gameContainer.style.width = `${containerSize}vmin`;
gameContainer.style.height = `${containerSize}vmin`;

const tileSize = 5;
holdBoard.style.width = `${tileSize*4}%`;
holdBoard.style.height = `${tileSize*2}%`;
mainBoard.style.width = `${tileSize*10}%`;
mainBoard.style.height = `${tileSize*20}%`;
nextBoard.style.width = `${tileSize*4}%`;
nextBoard.style.height = `${tileSize * 14}%`;