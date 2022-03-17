const srsTable = [null, chartZ, chartL, chartO, chartS, chartI, chartJ, chartT];
// srsTable[type][direction][rotation][offset]

function SRS(direction) {
    let newRotation;
    switch (direction) {
        case 0:
            newRotation = (activeMino.rotation + 1) % 4;
            break;
        case 1:
            newRotation = (activeMino.rotation + 3) % 4;
            break;
        case 2:
            newRotation = (activeMino.rotation + 2) % 4;
            break;
        default:
            return false;
    }
    //

    let offsetTable = srsTable[activeMino.type][direction][activeMino.rotation];
    for (let i = 0; i < offsetTable.length; i++) {
        let offset = offsetTable[i];
        let testMino = new Mino(activeMino.centerX + offset.x, activeMino.centerY + offset.y, activeMino.type, newRotation);
        let canRotate = true;
        testMino.blockList.forEach(block => {
            if (board.state[block.y][block.x] != 0) {
                canRotate = false;
                return;
            }
        });
        if (canRotate) {
            return testMino;
        }
    }

}