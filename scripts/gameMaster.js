const boardDefault = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [],
    [],
    [],
    [],
]
var board = new Board();
const minoName = [`X`, `Z`, `L`, `O`, `S`, `I`, `J`, `T`];
const spawn = new Coordinate(4, 1)

const gravityWorker = new Worker('./scripts/workers/interval.js')
var level = 1;
var linesClearedTotal = 0;

var nextQueue = [];
var minoCount = 0;
var activeMino = new ActiveMino(spawn.x, spawn.y, getNextMino(minoCount));

changeGravity(level);
window.addEventListener(event_lineClear, () => {
    linesClearedTotal++;
    let closetGoal = level * (level + 1) / 2;
    if (linesClearedTotal >= closetGoal) {
        level++;
        changeGravity(level);
    }
})

// Movement system
function rotate(direction) {
    if (!activeMino) { return false; }
    let srs = SRS(direction);
    if (srs) {
        delete activeMino;
        activeMino = srs
    }; //rotate successful

    //
    window.dispatchEvent(event_updateActiveMino);
    return true;
}

function move(direction) {
    if (!allowMove(direction)) { return false; }
    activeMino.centerX += direction;
    window.dispatchEvent(event_updateActiveMino);
    return true;
}

function softDrop() {
    //TODO:
}

function hardDrop() {
    let canFall = true;
    while (canFall) {
        canFall = gravity();
    }
    return true;
}

// Gravity

function gravity() {
    if (allowFall()) {
        activeMino.centerY++;
        window.dispatchEvent(event_updateActiveMino);
        return true;
    }

    // Drop
    console.log(`Dropping mino`);
    activeMino.blockList.forEach(block => {
        board.state[block.y][block.x] = activeMino.type;
    });
    activeMino.regenerate(spawn.x, spawn.y);
    if (lineClear()) {
        console.log(timestampLog(`Line clear`));
        window.dispatchEvent(event_lineClear);
    }
    window.dispatchEvent(event_updateActiveMino);
    window.dispatchEvent(event_minoChange);
    return false;
}