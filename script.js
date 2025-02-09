// function foo (n, x) {
//   let acc = 0;
// for (let i = 0; i <= n; i++){
// x % i === 0 ? acc += 1 : acc;
// }
// return acc;
// }

function foo(n, x){
  let acc = 0;
  if(n === 0){
    return acc
  }else(
    x % foo
  )
}
console.log(foo(10, 20))