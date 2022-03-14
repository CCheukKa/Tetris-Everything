function refresh(board) {
    board.innerHTML = board.innerHTML;
    return true;
}

function drawRect(group, x, y, width, height, classType = '', style = '', rx = 0, ry = rx, back = false, other = {}) {
    const t = document.createElement('rect');
    t.setAttribute('x', x);
    t.setAttribute('y', y);
    t.setAttribute('width', width);
    t.setAttribute('height', height);
    t.setAttribute('style', style);
    t.setAttribute('rx', rx);
    t.setAttribute('ry', ry);
    t.className = classType;
    //
    for (const key in other) {
        t.setAttribute(key, other[key]);
    }
    //
    if (back) {
        group.insertBefore(t, group.firstChild);
    } else {
        group.appendChild(t);
    }
}

function drawRectPercent(group, x, y, width, height, classType = '', style = '', rx = 0, ry = rx, back = false, other = {}) {
    const t = document.createElement('rect');
    t.setAttribute('x', `${x}%`);
    t.setAttribute('y', `${y}%`);
    t.setAttribute('width', `${width}%`);
    t.setAttribute('height', `${height}%`);
    t.setAttribute('style', style);
    t.setAttribute('rx', rx);
    t.setAttribute('ry', ry);
    t.className = classType;
    //
    for (const key in other) {
        t.setAttribute(key, other[key]);
    }
    //
    if (back) {
        group.insertBefore(t, group.firstChild);
    } else {
        group.appendChild(t);
    }
}

function drawLine(group, x1, y1, x2, y2, classType = '', style = '', back = false, other = {}) {
    const t = document.createElement('line');
    t.setAttribute('x1', x1);
    t.setAttribute('y1', y1);
    t.setAttribute('x2', x2);
    t.setAttribute('y2', y2);
    t.className = classType;
    //
    for (const key in other) {
        t.setAttribute(key, other[key]);
    }
    //
    if (back) {
        group.insertBefore(t, group.firstChild);
    } else {
        group.appendChild(t);
    }
}

function drawLinePercent(group, x1, y1, x2, y2, classType = '', style = '', back = false, other = {}) {
    const t = document.createElement('line');
    t.setAttribute('x1', `${x1}%`);
    t.setAttribute('y1', `${y1}%`);
    t.setAttribute('x2', `${x2}%`);
    t.setAttribute('y2', `${y2}%`);
    t.className = classType;
    //
    for (const key in other) {
        t.setAttribute(key, other[key]);
    }
    //
    if (back) {
        group.insertBefore(t, group.firstChild);
    } else {
        group.appendChild(t);
    }
}