window.addEventListener('keydown', e => { absoluteKeydown(e) });
window.addEventListener('keyup', e => { absoluteKeyup(e) });
window.addEventListener('absoluteKeydown', e => { input(e) });
window.addEventListener('absoluteKeyup', e => {});
var keyDownList = [];
var dasList = [];
var arrKey = null;
const dasWorker = new Worker('./scripts/workers/timeout.js');
const arrWorker = new Worker('./scripts/workers/interval.js');

const dasKeys = [97, 99];

function absoluteKeydown(e) {
    if (!keyDownList[e.keyCode]) {
        keyDownList[e.keyCode] = true;
        window.dispatchEvent(new CustomEvent('absoluteKeydown', { detail: e }));
        if (dasKeys.includes(e.keyCode)) {
            arrWorker.postMessage(-1);
            arrKey = null;
            dasList[e.keyCode] = true;
            //
            dasWorker.postMessage(dasTime)
                // console.log(timestampLog(`Requested timeout`));
            dasWorker.onmessage = function() {
                // console.log(timestampLog(`Received timeout`));
                if (dasList[e.keyCode]) {
                    dasList[e.keyCode] = false;
                    arrKey = e.keyCode;
                    arr(e);
                }
                dasWorker.postMessage(-1);
            }
        }
    }
}

function absoluteKeyup(e) {
    keyDownList[e.keyCode] = false;
    window.dispatchEvent(new CustomEvent('absoluteKeyup', { detail: e }));
    dasList[e.keyCode] = false;

    /*
        ? Better to not fix:
        if (dasKeys.includes(e.keyCode)) {
            dasWorker.postMessage(-1);
        }
    */

    if (arrKey == e.keyCode) {
        arrKey = null;
        arrWorker.postMessage(-1);
    }

    if (e.keyCode == 98) {
        isSoftDropping = false;
    }
}

function input(e) {
    console.log(e.detail);
    switch (e.detail.keyCode) {
        case 101: // clockwise
            rotate(0);
            break;
        case 102:
        case 13: // anti-clockwise
            rotate(1);
            break;
        case 100: // 180
            rotate(2);
            break;

        case 97: // left
            move(-1);
            break;
        case 99: // right
            move(1);
            break;

        case 98: // soft drop
            isSoftDropping = true;
            break;

        case 32: // hard drop
            hardDrop();
            break;

        case 16: // hold
            hold();
            break;

        default:
            return false;
    }
    return true;
}

function arr(e) {
    arrKey = e.keyCode;
    arrWorker.postMessage(arrTime);
    // console.log(timestampLog(`Requested interval`));
    arrWorker.onmessage = function() {
            // console.log(timestampLog(`Received interval`));
            if (keyDownList[arrKey]) {
                input({ detail: { keyCode: arrKey } });
            } else {
                arrWorker.postMessage(-1);
            }
        }
        // console.log(timestampLog(`Returning arr()`));
}