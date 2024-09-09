module.exports = function reverse (n) {
    let str = '';
    str = String(Math.abs(n));
    let reversed = '';
    reversed = str.split('').reverse().join('');
    return Number(reversed);
}
