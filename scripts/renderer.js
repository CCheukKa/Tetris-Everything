window.addEventListener('load', () => {
    window.dispatchEvent(event_updateActiveMino);
    window.dispatchEvent(event_boardChange);
    window.dispatchEvent(event_minoChange);
});

const cornerRadius = 3;

window.addEventListener('boardChange', () => { redrawGrid(); })
window.addEventListener('minoChange', () => {
    redrawMinos();
    redrawNextQueue();
})
window.addEventListener('activeMinoChange', () => {
    if (activeMino) {
        redrawActive();
    }
});



function redrawGrid() {
    mainBoard.grid.innerHTML = '';
    for (let i = 1; i < 10; i++) {
        drawLinePercent(mainBoard.grid, i * 10, 0, i * 10, 100, `gridline`);
        drawLinePercent(mainBoard.grid, 0, i * 5, 100, i * 5, `gridline`);
    }
    for (let i = 10; i < 20; i++) {
        drawLinePercent(mainBoard.grid, 0, i * 5, 100, i * 5, `gridline`);
    }
    refresh(mainBoard.grid);
    return true;
}

function redrawMinos() {
    mainBoard.minoGroup.innerHTML = '';
    for (let y = 0; y < 20; y++) {
        for (let x = 0; x < 10; x++) {
            let minoType = board.state[y][x];
            if (minoType) {
                drawRectPercent(mainBoard.minoGroup, 10 * x, 5 * y, 10, 5, `mino ${minoName[minoType]}`, '', cornerRadius, cornerRadius);
            }
        }
    }
    refresh(mainBoard.minoGroup);
}

function redrawActive() {
    mainBoard.activeGroup.innerHTML = '';
    activeMino.blockList.forEach(block => {
        drawRectPercent(mainBoard.activeGroup, 10 * block.x, 5 * block.y, 10, 5, `mino ${minoName[activeMino.type]} active`, '', cornerRadius, cornerRadius);
    });
    redrawGhost();
    refresh(mainBoard.activeGroup);
}

function redrawGhost() {
    ghostMino = new Mino(activeMino.centerX, activeMino.centerY, activeMino.type, activeMino.rotation);

    while (true) {
        if (!allowFall(ghostMino)) { break; };
        ghostMino.centerY++;
        ghostMino.redefineBlocks();
    }

    ghostMino.blockList.forEach(block => {
        drawRectPercent(mainBoard.activeGroup, 10 * block.x, 5 * block.y, 10, 5, `mino ${minoName[activeMino.type]} active ghost`, '', cornerRadius, cornerRadius);
    });
    delete ghostMino;
    return true;
}

function redrawNextQueue() {
    nextBoard.innerHTML = '';
    let nextMinos = [];
    drawLinePercent(nextBoard, 50, 0, 50, 100, 'gridline');
    for (let y = 1; y < 6; y++) {
        drawLinePercent(nextBoard, 0, y * 100 / 6, 100, y * 100 / 6, 'gridline');
    }

    for (let i = 0; i < nextQueuePeekCount; i++) {
        let type = nextQueue[minoCount + i];
        let offset = new Coordinate(0, 0);
        switch (type) {
            case 1: //Z
                offset = new Coordinate(0, 0.5);
                break;
            case 2: //L
                offset = new Coordinate(0, 0.5);
                break;
            case 3: //O
                offset = new Coordinate(-0.5, 0.5);
                break;
            case 4: //S
                offset = new Coordinate(0, 0.5);
                break;
            case 5: //I
                offset = new Coordinate(-0.5, 0);
                break;
            case 6: //J
                offset = new Coordinate(0, 0.5);
                break;
            case 7: //T
                offset = new Coordinate(0, 0.5);
                break;
            default:
                return false;
        }
        nextMinos.push(new Mino(offset.x, offset.y, type, 0));
    }

    for (let i = 0; i < nextMinos.length; i++) {
        const mino = nextMinos[i];

        mino.blockList.forEach(block => {
            drawRectPercent(nextBoard, 20 * block.x + 40, i * 100 / 6 + block.y * 100 / 16 + 1 * 100 / 6 - 50 / 16, 20, 100 / 16, `mino ${minoName[mino.type]}`, '', cornerRadius, cornerRadius);
        });
        delete mino;
    }

    //
    refresh(nextBoard);
}