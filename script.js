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
// console.log(sum([true,  true,  true,  false,
//     true,  true,  true,  true ,
//     true,  false, true,  false,
//     true,  false, false, true ,
//     true,  true,  true,  true ,
//     false, false, true]))

    function getGrade (s1, s2, s3) {
        const score = Math.floor((s1 + s2 + s3) / 3);
        console.log(score)
                       if( 0 <= score && score < 60){return 'F'}
                    else if( 60 <= score&& score < 70){return 'D'}
                    else if( 70 <= score&& score < 80){return 'C'}
                    else if(80 <= score&& score < 90){return 'B'}
                    else if(90 <= score&& score <= 100){return 'A'}
            
  }
      console.log(getGrade(95,90,93))