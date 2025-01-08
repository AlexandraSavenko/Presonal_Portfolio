const mango = {paidMango: "🥭",
freeMango: "🆓"}

function priceForMango(quantity){

const price = 5;
let total = 0
let totalView = ""
for(let i = 1; i <= quantity; i++){
if(i % 3 !== 0){
total += price
totalView = totalView + " " + mango.paidMango
}else{total += 0
  totalView =  totalView + " " + mango.freeMango
}
}
console.log(totalView)
return total
}
console.log(priceForMango(9))

//---------------------------------------------------------
// function mango(quantity, price){
//     const mango = {paidMango: "🥭",
//     freeMango: "🆓"}
//     let total = []
//     let freeMango = 0
//     let totalView = ""
//     for(let i = 1; i <= quantity; i++){
//     if(i % 3 !== 0){
//     total.push(price)
//     totalView = totalView + " " + mango.paidMango
//     }else{freeMango += 1
//       totalView =  totalView + " " + mango.freeMango
//     }
//     }
//       let paidTotal = total.reduce((acc, el) => acc +el, 0)
//     return `Quantity = ${quantity}
//     Price = ${price}
//     Total cost ==> ${paidTotal}
//     #Paid ${total.length + 1} mangoes for $${price} per unit = $${paidTotal}; ${freeMango} for free
//     # ${totalView}` 
// }
// console.log(mango(3, 3))