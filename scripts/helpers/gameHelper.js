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
    constructor(centerX, centerY, index = 0, rotation = 0) {
        this.centerX = centerX;
        this.centerY = centerY;
        this.index = index;
        this.rotation = rotation;
        this.blockList = [];
        this.redefineBlocks();
        //
        window.dispatchEvent(new Event('activeMinoChange'));
        return true;
    }

    redefineBlocks() {
        this.blockList = [];
        switch (this.index) {
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
}

window.addEventListener('updateActiveMino', () => {
    activeMino.redefineBlocks();
    window.dispatchEvent(event_activeMinoChange);
});

function allowMove(direction) {
    let result = true;
    activeMino.blockList.forEach(block => {
        if (board.state[block.y][block.x + direction] != 0) {
            result = false;
        }
    });
    return result;
}