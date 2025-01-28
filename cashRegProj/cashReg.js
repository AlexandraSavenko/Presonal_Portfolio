let price = 3.26;
let cid = [
    // ["PENNY", 1.01], 
    // ["NICKEL", 2.05], 
    // ["DIME", 3.1], 
    // ["QUARTER", 4.25], 
    // ["ONE", 90], 
    // ["FIVE", 55], 
    // ["TEN", 20], 
    // ["TWENTY", 60], 
    // ["ONE HUNDRED", 100]
    ["PENNY", 0.04], 
  ["NICKEL", 0], 
  ["DIME", 0.2], 
  ["QUARTER", 0.5], 
  ["ONE", 1], 
  ["FIVE", 1], 
  ["TEN", 0], 
  ["TWENTY", 0], 
  ["ONE HUNDRED", 0]
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
   let restMessage = change.map(([name, amount]) => `${name}: $${amount}`).join(" ")
    changeInfo.textContent = `Status: ${status} ${restMessage}`
}

function purchase (){
    const result = {status: "",
        change: []
    };
    let cashInDrawer = countCashInDrawer();//335.41  (354.91)
  const inputValue = Number(input.value);

  let rest = inputValue - price;
  const restAmount = rest;

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
    console.log(`rest: ${rest} changeDue: ${inputValue - price} amountOfUnits: ${amountOfUnits}`)
  }//end of while loop

  if(amountOfUnits > 0){
result.change.push([currencyUnitName, parseFloat(amountOfUnits.toFixed(2))])
  }

  }
}//end of for loop
if(rest > 0){
    return {status: "INSUFFICIENT_FUNDS", change: []}
  }


createRestMessage(result)
}
  
purchaseBtn.addEventListener("click", ()=> {
    purchase()
    input.value = ""
})
