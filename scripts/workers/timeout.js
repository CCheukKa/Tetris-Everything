var activeTimeout;
onmessage = function(e) {
    clearTimeout(activeTimeout);
    if (e.data == -1) { return; }
    // console.log(timestampLog(`Worker started`));
    activeTimeout = setTimeout(() => {
        postMessage(true);
        // console.log(timestampLog(`Posted timeout`));
    }, e.data);
}

function timestampLog(content) {
    let date = new Date();
    return `${(date.getDate()+100).toString().substring(1)}/${(date.getMonth()+100).toString().substring(1)}/${date.getFullYear()} ${(date.getHours()+100).toString().substring(1)}:${(date.getMinutes()+100).toString().substring(1)}:${(date.getSeconds()+100).toString().substring(1)}.${(date.getMilliseconds()+1000).toString().substring(1)} | ${content}`;
}