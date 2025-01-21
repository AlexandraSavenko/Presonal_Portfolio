function maxProduct(numbers, size){
const sortedArr = numbers.sort((a, b) => b - a).slice(0, size)
let acc = 1;
sortedArr.map(el => acc *= el)
return acc
}
console.log(maxProduct([4, 3, 5], 2))
console.log(maxProduct([10, 8, 7, 9], 3))