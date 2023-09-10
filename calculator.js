function Calculate(n) {
    $("#result").text(secToMinHour(n))
}

function timeToSec(n, r) {
    let t = r;
    return t = 60 * n + t
}

function secToMinHour(n) {
    let r, t = n;
    return t >= 60 && t < 3600 ? `${parseInt(t/60)}m ${t%=60}s` : t >= 3600 ? (r = parseInt(t / 3600), t %= 3600, `${r}h ${parseInt(t/60)}m ${t%=60}s`) : null != t ? `${t}s` : void 0
}