module.exports = function reverse (n) {
    n = Math.abs(n)
    n += ''
    let reversed = ''
    for (let i = 0; i < n.length; i++) {
        let oneEl = n[n.length - 1 - i]
        reversed += oneEl
    }
    return reversed
}
