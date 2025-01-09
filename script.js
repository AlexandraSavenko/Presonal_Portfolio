function sumSquare (arr) {
    return arr.map(el => el * el).reduce((acc, el) => acc + el, 0)
}
console.log(sumSquare([2, 5]))