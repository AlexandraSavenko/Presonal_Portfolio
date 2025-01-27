function countNumber(n, x) {
  let count = 0;
  for (let i = 1; i <= n; i++){
    console.log(`${x} % ${i} = ${x % i}`);
    console.log(`${x} / ${i} = ${x / i}`)
    if(x % i === 0 && x / i <=n){
      count++
      console.log(`count is ${count}`)
    }
  }return count
}
//console.log(countNumber(100000,1000000000))
//console.log(countNumber(5,5))
console.log(countNumber(6,12))


// function countNumber(n, x) {
//   const numberLines = []
// const pifArr = []
// for(let i = 1; i <= n; i++){
//   numberLines.push(i)
// }
// for(const num of numberLines){
//   for(let i = 1; i <=n; i++){
// pifArr.push(i * num)
//   }
// }
// const result = pifArr.reduce((acc, el) => {if(el === x){acc += 1} return acc}, 0)
//  return result 
// }