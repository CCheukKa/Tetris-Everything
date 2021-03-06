function timestampLog(content) {
    let date = new Date();
    return `${(date.getDate()+100).toString().substring(1)}/${(date.getMonth()+100).toString().substring(1)}/${date.getFullYear()} ${(date.getHours()+100).toString().substring(1)}:${(date.getMinutes()+100).toString().substring(1)}:${(date.getSeconds()+100).toString().substring(1)}.${(date.getMilliseconds()+1000).toString().substring(1)} | ${content}`;
}

function shuffle(array = []) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}