window.addEventListener('load', () => {
    window.dispatchEvent(event_updateActiveMino);
    window.dispatchEvent(event_boardChange);
    window.dispatchEvent(event_minoChange);
});

const cornerRadius = 3;

window.addEventListener('boardChange', () => { redrawGrid(); })
window.addEventListener('minoChange', () => { redrawMinos(); })
window.addEventListener('activeMinoChange', () => {
    if (activeMino) { redrawActive(); }
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
    refresh(mainBoard.activeGroup);
}