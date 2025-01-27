function convert (n, x){
const numberLines = []
const pifArr = []
for(let i = 1; i <= n; i++){
  numberLines.push(i)
}
for(const num of numberLines){
  for(let i = 1; i <=n; i++){
pifArr.push(i * num)
  }
}
const result = pifArr.reduce((acc, el) => {if(el === x){acc += 1} return acc}, 0)
console.log(result)
}
convert(6, 12)

//1 2 3 4 5
//2 4 6 