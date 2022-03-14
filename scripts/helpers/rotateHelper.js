function SRS(direction) {
    //! Temporary
    if (direction == 0) {
        return new ActiveMino(activeMino.centerX, activeMino.centerY, activeMino.index, (activeMino.rotation + 1) % 4);
    }
    if (direction == 1) {
        return new ActiveMino(activeMino.centerX, activeMino.centerY, activeMino.index, (activeMino.rotation + 3) % 4);
    }
    if (direction == 2) {
        return new ActiveMino(activeMino.centerX, activeMino.centerY, activeMino.index, (activeMino.rotation + 2) % 4);
    }
    //
    switch (activeMino.index) {
        case 1: //Z
            return rotateZ(direction);
        case 2: //L
            return rotateL(direction);
        case 3: //O
            return rotateO(direction);
        case 4: //S
            return rotateS(direction);
        case 5: //I
            return rotateI(direction);
        case 6: //J
            return rotateJ(direction);
        case 7: //T
            return rotateT(direction);
        default:
            return false;
    }
}

function rotateZ(direction) {
    if (direction == 0) {
        return new ActiveMino(activeMino.centerX, activeMino.centerY, activeMino.index, (activeMino.rotation + 1) % 4);
    }
    if (direction == 1) {
        return new ActiveMino(activeMino.centerX, activeMino.centerY, activeMino.index, (activeMino.rotation + 3) % 4);
    }
    if (direction == 2) {
        return new ActiveMino(activeMino.centerX, activeMino.centerY, activeMino.index, (activeMino.rotation + 2) % 4);
    }
}