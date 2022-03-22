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
var isSoftDropping = false;

var nextQueue = [];
var heldType = 0;
var minoCount = 0;
var activeMino = new Mino(spawn.x, spawn.y, getNextMino(minoCount));

var alreadyHeldThisRound = false;

changeGravity(level);
window.addEventListener('lineClear', (e) => {
    // console.log(e);
    linesClearedTotal += e.detail;
    let closetGoal = level * (level + 1) / 2 * 5;
    console.log(linesClearedTotal, closetGoal);
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

function hardDrop() {
    let canFall = true;
    while (canFall) {
        canFall = gravity();
    }
    return true;
}

// Gravity

function gravity() {
    if (allowFall(activeMino)) {
        activeMino.centerY++;
        window.dispatchEvent(event_updateActiveMino);
        return true;
    }

    // TODO:
    lock();
}

function lock() {
    // console.log(`Locking mino`);
    activeMino.blockList.forEach(block => {
        board.state[block.y][block.x] = activeMino.type;
    });
    activeMino.regenerate(spawn.x, spawn.y);
    let linesCleared = lineClear();
    if (linesCleared) {
        // console.log(timestampLog(`Line clear`));
        window.dispatchEvent(new CustomEvent('lineClear', { detail: linesCleared }));
    }
    alreadyHeldThisRound = false;
    window.dispatchEvent(event_updateActiveMino);
    window.dispatchEvent(event_minoChange);
    return false;
}

// Hold

function hold() {
    if (alreadyHeldThisRound) { return false; }
    delete activeMino;
    if (heldType) {
        let buffer = heldType;
        heldType = activeMino.type;
        activeMino = new Mino(spawn.x, spawn.y, buffer, 0);
    } else {
        heldType = activeMino.type;
        activeMino.regenerate(spawn.x, spawn.y);
    }

    alreadyHeldThisRound = true;
    window.dispatchEvent(event_updateActiveMino);
    window.dispatchEvent(event_minoChange);

    changeGravity(level);
}