function sum (arr) {
    return arr.reduce((acc, el) => {
        if(el === true){
   
            return acc + 1}
        return acc}, 0)
}
// function sum (arr){
//     let acc = 0;
//     arr.map(el => {if(el === true){acc += 1}})
//     return acc
// }
console.log(sum([true,  true,  true,  false,
    true,  true,  true,  true ,
    true,  false, true,  false,
    true,  false, false, true ,
    true,  true,  true,  true ,
    false, false, true]))