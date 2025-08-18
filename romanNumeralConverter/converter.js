const input = document.getElementById("number");
const button = document.getElementById("convert-btn");
const output = document.getElementById("output");
const romanNumbers = {
  1: "I",
  2: "II",
  3: "III",
  4: "IV",
  5: "V",
  6: "VI",
  7: "VII",
  8: "VIII",
  9: "IX"
}

const clearOutput = ()=>{
  if(output.textContent === ""){
    return
  }
  setTimeout(()=>{output.textContent = ""}, 3000)
}

//-----------------------------function--------------------//

function convertToRoman(num){
  const lookupTable = {
M: 1000,
CM: 900,
D: 500,
CD: 400,
C: 100,
XC: 90,
L: 50,
XL: 40,
X: 10,
IX: 9,
V: 5,
IV: 4,
I: 1}
 let accumulator = ""  
 for (const key in lookupTable){
   console.log(key)
   const numberValue = lookupTable[key];
   while(numberValue <= num){
     num -= numberValue;
     accumulator += key;
   }
 } 
 return accumulator;   
}
//----------------------------function---------------------//
const getInputValue = () =>{
  const inputValue = Math.floor(Number(input.value.trim()))
output.textContent = "";
console.log(output.textContent)
  if(inputValue >= 4000){output.textContent = "Please enter a number less than or equal to 3999"
  clearOutput()}else if(inputValue < 0){
  output.textContent = "Please enter a number greater than or equal to 1"
   clearOutput() }else if(!inputValue){
 output.textContent = "Please enter a valid number"
  clearOutput()
}else if(inputValue > 0){
  const result = convertToRoman(inputValue)
  output.textContent = result
}
input.value = ""
}
//------------------------------listener---------------------//
button.addEventListener("click", getInputValue)

