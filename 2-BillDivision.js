//Output: Bon Apetit
let nonAnnaDish = 1
let foodprices = [3, 10, 2, 9]
let paid = 7

/* //Output: 5
let nonAnnaDish = 1
let foodprices = [3, 10, 2, 9]
let paid = 12 */
let nonAnnaFood = foodprices
nonAnnaFood.splice(nonAnnaDish, 1)

let sum = 0;
for (let i = 0; i < nonAnnaFood.length; i++){
  sum += nonAnnaFood[i]
}
console.log(foodprices)
console.log(nonAnnaFood)

sum = sum/2

if (sum === paid) {
  console.log('Bon Appetit')
} else {
  console.log(foodprices[nonAnnaDish]/2)
}