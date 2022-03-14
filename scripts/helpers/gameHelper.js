class Board {
    constructor(x = 10, y = 20, boardState = boardDefault) {
        this.x = x;
        this.y = y;
        this.state = boardState;
    }
}

class Coordinate {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}

class ActiveMino {
    constructor(centerX, centerY, type = getNextMino(minoCount), rotation = 0) {
        this.centerX = centerX;
        this.centerY = centerY;
        this.type = type;
        this.rotation = rotation;
        this.blockList = [];
        this.redefineBlocks();
        //
        window.dispatchEvent(new Event('activeMinoChange'));
        return true;
    }

    redefineBlocks() {
        this.blockList = [];
        switch (this.type) {
            case 1: //Z
                switch (this.rotation) {
                    case 0:
                        this.blockList.push(new Coordinate(this.centerX - 1, this.centerY - 1));
                        this.blockList.push(new Coordinate(this.centerX, this.centerY - 1));
                        this.blockList.push(new Coordinate(this.centerX, this.centerY));
                        this.blockList.push(new Coordinate(this.centerX + 1, this.centerY));
                        break;
                    case 1:
                        this.blockList.push(new Coordinate(this.centerX + 1, this.centerY - 1));
                        this.blockList.push(new Coordinate(this.centerX + 1, this.centerY));
                        this.blockList.push(new Coordinate(this.centerX, this.centerY));
                        this.blockList.push(new Coordinate(this.centerX, this.centerY + 1));
                        break;
                    case 2:
                        this.blockList.push(new Coordinate(this.centerX + 1, this.centerY + 1));
                        this.blockList.push(new Coordinate(this.centerX, this.centerY + 1));
                        this.blockList.push(new Coordinate(this.centerX, this.centerY));
                        this.blockList.push(new Coordinate(this.centerX - 1, this.centerY));
                        break;
                    case 3:
                        this.blockList.push(new Coordinate(this.centerX - 1, this.centerY + 1));
                        this.blockList.push(new Coordinate(this.centerX - 1, this.centerY));
                        this.blockList.push(new Coordinate(this.centerX, this.centerY));
                        this.blockList.push(new Coordinate(this.centerX, this.centerY - 1));
                        break;
                    default:
                        return false;

                }
                break;
                //
            case 2: //L
                switch (this.rotation) {
                    case 0:
                        this.blockList.push(new Coordinate(this.centerX - 1, this.centerY));
                        this.blockList.push(new Coordinate(this.centerX, this.centerY));
                        this.blockList.push(new Coordinate(this.centerX + 1, this.centerY));
                        this.blockList.push(new Coordinate(this.centerX + 1, this.centerY - 1));
                        break;
                    case 1:
                        this.blockList.push(new Coordinate(this.centerX, this.centerY - 1));
                        this.blockList.push(new Coordinate(this.centerX, this.centerY));
                        this.blockList.push(new Coordinate(this.centerX, this.centerY + 1));
                        this.blockList.push(new Coordinate(this.centerX + 1, this.centerY + 1));
                        break;
                    case 2:
                        this.blockList.push(new Coordinate(this.centerX + 1, this.centerY));
                        this.blockList.push(new Coordinate(this.centerX, this.centerY));
                        this.blockList.push(new Coordinate(this.centerX - 1, this.centerY));
                        this.blockList.push(new Coordinate(this.centerX - 1, this.centerY + 1));
                        break;
                    case 3:
                        this.blockList.push(new Coordinate(this.centerX, this.centerY + 1));
                        this.blockList.push(new Coordinate(this.centerX, this.centerY));
                        this.blockList.push(new Coordinate(this.centerX, this.centerY - 1));
                        this.blockList.push(new Coordinate(this.centerX - 1, this.centerY - 1));
                        break;
                    default:
                        return false;
                }
                break;
                //
            case 3: //O
                this.blockList.push(new Coordinate(this.centerX, this.centerY));
                this.blockList.push(new Coordinate(this.centerX, this.centerY - 1));
                this.blockList.push(new Coordinate(this.centerX + 1, this.centerY));
                this.blockList.push(new Coordinate(this.centerX + 1, this.centerY - 1));
                break;
                //
            case 4: //S
                switch (this.rotation) {
                    case 0:
                        this.blockList.push(new Coordinate(this.centerX - 1, this.centerY));
                        this.blockList.push(new Coordinate(this.centerX, this.centerY));
                        this.blockList.push(new Coordinate(this.centerX, this.centerY - 1));
                        this.blockList.push(new Coordinate(this.centerX + 1, this.centerY - 1));
                        break;
                    case 1:
                        this.blockList.push(new Coordinate(this.centerX, this.centerY - 1));
                        this.blockList.push(new Coordinate(this.centerX, this.centerY));
                        this.blockList.push(new Coordinate(this.centerX + 1, this.centerY));
                        this.blockList.push(new Coordinate(this.centerX + 1, this.centerY + 1));
                        break;
                    case 2:
                        this.blockList.push(new Coordinate(this.centerX + 1, this.centerY));
                        this.blockList.push(new Coordinate(this.centerX, this.centerY));
                        this.blockList.push(new Coordinate(this.centerX, this.centerY + 1));
                        this.blockList.push(new Coordinate(this.centerX - 1, this.centerY + 1));
                        break;
                    case 3:
                        this.blockList.push(new Coordinate(this.centerX, this.centerY + 1));
                        this.blockList.push(new Coordinate(this.centerX, this.centerY));
                        this.blockList.push(new Coordinate(this.centerX - 1, this.centerY));
                        this.blockList.push(new Coordinate(this.centerX - 1, this.centerY - 1));
                        break;
                    default:
                        return false;
                }
                break;
                //
            case 5: //I
                switch (this.rotation) {
                    case 0:
                        this.blockList.push(new Coordinate(this.centerX - 1, this.centerY));
                        this.blockList.push(new Coordinate(this.centerX, this.centerY));
                        this.blockList.push(new Coordinate(this.centerX + 1, this.centerY));
                        this.blockList.push(new Coordinate(this.centerX + 2, this.centerY));
                        break;
                    case 1:
                        this.blockList.push(new Coordinate(this.centerX + 1, this.centerY - 1));
                        this.blockList.push(new Coordinate(this.centerX + 1, this.centerY));
                        this.blockList.push(new Coordinate(this.centerX + 1, this.centerY + 1));
                        this.blockList.push(new Coordinate(this.centerX + 1, this.centerY + 2));
                        break;
                    case 2:
                        this.blockList.push(new Coordinate(this.centerX - 1, this.centerY + 1));
                        this.blockList.push(new Coordinate(this.centerX, this.centerY + 1));
                        this.blockList.push(new Coordinate(this.centerX + 1, this.centerY + 1));
                        this.blockList.push(new Coordinate(this.centerX + 2, this.centerY + 1));
                        break;
                    case 3:
                        this.blockList.push(new Coordinate(this.centerX, this.centerY - 1));
                        this.blockList.push(new Coordinate(this.centerX, this.centerY));
                        this.blockList.push(new Coordinate(this.centerX, this.centerY + 1));
                        this.blockList.push(new Coordinate(this.centerX, this.centerY + 2));
                        break;
                    default:
                        return false;
                }
                break;
                //
            case 6: //J
                switch (this.rotation) {
                    case 0:
                        this.blockList.push(new Coordinate(this.centerX - 1, this.centerY - 1));
                        this.blockList.push(new Coordinate(this.centerX - 1, this.centerY));
                        this.blockList.push(new Coordinate(this.centerX, this.centerY));
                        this.blockList.push(new Coordinate(this.centerX + 1, this.centerY));
                        break;
                    case 1:
                        this.blockList.push(new Coordinate(this.centerX + 1, this.centerY - 1));
                        this.blockList.push(new Coordinate(this.centerX, this.centerY - 1));
                        this.blockList.push(new Coordinate(this.centerX, this.centerY));
                        this.blockList.push(new Coordinate(this.centerX, this.centerY + 1));
                        break;
                    case 2:
                        this.blockList.push(new Coordinate(this.centerX + 1, this.centerY + 1));
                        this.blockList.push(new Coordinate(this.centerX + 1, this.centerY));
                        this.blockList.push(new Coordinate(this.centerX, this.centerY));
                        this.blockList.push(new Coordinate(this.centerX - 1, this.centerY));
                        break;
                    case 3:
                        this.blockList.push(new Coordinate(this.centerX - 1, this.centerY + 1));
                        this.blockList.push(new Coordinate(this.centerX, this.centerY + 1));
                        this.blockList.push(new Coordinate(this.centerX, this.centerY));
                        this.blockList.push(new Coordinate(this.centerX, this.centerY - 1));
                        break;
                    default:
                        return false;
                }
                break;
                //
            case 7: //T
                switch (this.rotation) {
                    case 0:
                        this.blockList.push(new Coordinate(this.centerX - 1, this.centerY));
                        this.blockList.push(new Coordinate(this.centerX, this.centerY - 1));
                        this.blockList.push(new Coordinate(this.centerX + 1, this.centerY));
                        this.blockList.push(new Coordinate(this.centerX, this.centerY));
                        break;
                    case 1:
                        this.blockList.push(new Coordinate(this.centerX, this.centerY - 1));
                        this.blockList.push(new Coordinate(this.centerX + 1, this.centerY));
                        this.blockList.push(new Coordinate(this.centerX, this.centerY + 1));
                        this.blockList.push(new Coordinate(this.centerX, this.centerY));
                        break;
                    case 2:
                        this.blockList.push(new Coordinate(this.centerX + 1, this.centerY));
                        this.blockList.push(new Coordinate(this.centerX, this.centerY + 1));
                        this.blockList.push(new Coordinate(this.centerX - 1, this.centerY));
                        this.blockList.push(new Coordinate(this.centerX, this.centerY));
                        break;
                    case 3:
                        this.blockList.push(new Coordinate(this.centerX, this.centerY + 1));
                        this.blockList.push(new Coordinate(this.centerX - 1, this.centerY));
                        this.blockList.push(new Coordinate(this.centerX, this.centerY - 1));
                        this.blockList.push(new Coordinate(this.centerX, this.centerY));
                        break;
                    default:
                        return false;
                }
                break;
                //
            default:
                delete this;
                return false;
        }
    }

    regenerate(centerX, centerY, type = getNextMino(minoCount), rotation = 0) {
        activeMino = new ActiveMino(centerX, centerY, type, rotation);
        delete this;
    }
}

function getNextMino(count) {
    if (!nextQueue[count]) {
        nextQueue = nextQueue.concat(shuffle([1, 2, 3, 4, 5, 6, 7]));
    }
    let result = nextQueue[minoCount];
    minoCount++;
    return result;
}

window.addEventListener('updateActiveMino', () => {
    activeMino.redefineBlocks();
    window.dispatchEvent(event_activeMinoChange);
});

function allowMove(direction) {
    let canMove = true;
    activeMino.blockList.forEach(block => {
        if (board.state[block.y][block.x + direction] != 0) {
            canMove = false;
        }
    });
    return canMove;
}

function changeGravity(level) {
    let gravityMS = 1000 * ((0.8 - ((level - 1) * 0.007)) ** (level - 1));
    console.log(`Gravity: ${gravityMS}`);
    gravityWorker.postMessage(gravityMS);
    gravityWorker.onmessage = function() {
        gravity();
    }
}

function allowFall() {
    let canDrop = true;
    activeMino.blockList.forEach(block => {
        if (board.state[block.y + 1][block.x] != 0) {
            canDrop = false;
            return;
        }
    });
    return canDrop;
}

function lineClear() {
    let clearedLines = [];

    // Identify full lines
    for (let y = 0; y < board.y; y++) {
        let allFilled = true;
        for (let x = 0; x < board.state[y].length; x++) {
            if (board.state[y][x] <= 0) {
                allFilled = false;
                continue;
            }
        }
        if (!allFilled) { continue; }
        clearedLines.push(y);
    }

    //Shift board
    clearedLines.forEach(line => {
        //TODO: very top of the board clear
        for (let y = line; y > 0; y--) {
            board.state[y] = board.state[y - 1].concat();
        }
    });

    return true;
}