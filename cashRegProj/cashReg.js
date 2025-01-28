let price = 19.5;
let cid = [
["PENNY", 1.01], 
["NICKEL", 2.05], 
["DIME", 3.1], 
["QUARTER", 4.25], 
["ONE", 90], 
["FIVE", 55], 
["TEN", 20], 
["TWENTY", 60], 
["ONE HUNDRED", 100]
];
const changeInfo = document.getElementById("change-due");
const input = document.getElementById("cash");
const purchaseBtn = document.getElementById("purchase-btn");
const viewPrice = document.getElementById("price")

viewPrice.textContent = price;

 let currencyUnits = [
  ['PENNY', .01],
  ['NICKEL', .05],
  ['DIME', .1],
  ['QUARTER', .25],
  ['ONE', 1],
  ['FIVE', 5],
  ['TEN', 10],
  ['TWENTY', 20],
  ['ONE HUNDRED', 100]
];


function countCashInDrawer (){
const cashInDrawer = cid.reduce((acc, el)=> {
    return acc += el[1]
}, 0)
return parseFloat(cashInDrawer.toFixed(2))
}//end of countCashInDrawer

function createRestMessage ({status, change}) {
    changeInfo.textContent = `Status: ${status} ${change.flat().join(" ")}`
}

function purchase (){
    const result = {status: "",
        change: []
    };
    let cashInDrawer = countCashInDrawer();//335.41  (354.91)
  inputValue = Number(input.value);

  rest = inputValue - price;

rest === cashInDrawer ? result.status = "CLOSED" : result.status = "OPEN"

   if(inputValue < price){
    alert("Customer does not have enough money to purchase the item")
  return;
  }
if(rest > cashInDrawer){
  changeInfo.textContent = "Status: INSUFFICIENT_FUNDS"
  return;
}
if(rest === 0){
  changeInfo.textContent = "No change due - customer paid with exact cash"
  return;
}

for (let i = currencyUnits.length - 1; i >= 0; i--){

  let currencyUnitName = currencyUnits[i][0];
  let currencyUnit = currencyUnits[i][1]
  let currencyInDrawer = cid[i][1]
  if(rest >= currencyUnit && currencyInDrawer > 0){
 let amountOfUnits = 0;

  while(rest >= currencyUnit && currencyInDrawer > 0){

    rest -= currencyUnit;
    rest = parseFloat(rest.toFixed(2))
 currencyInDrawer -= currencyUnit;
    amountOfUnits += currencyUnit;
    cashInDrawer -= currencyUnit;
  }//end of while loop
  if(amountOfUnits > 0){
result.change.push([currencyUnitName, parseFloat(amountOfUnits.toFixed(2))])
  }

  }
}//end of for loop


let formText = (status, changeArr) => changeArr.map(([unit, amount]) => `Status: ${status} ${unit}: $${Number(amount)}`).join(" ")

//const resultText = formText(cashInDrawer? "OPEN" : "CLOSE", changeArr)
createRestMessage(result)
}
  
purchaseBtn.addEventListener("click", ()=> {
    purchase()
})
//console.log(cashInDrawer.toFixed(2) === 0)