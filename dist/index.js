"use strict";
let années = 0;
function DepositProfit(deposit, rate, treshold) {
    while (deposit < treshold) {
        let interets = (deposit * rate) / 100;
        console.log(interets);
        deposit = deposit + interets;
        années = années + 1;
        // console.log(depoInit)
    }
    return années;
}
DepositProfit(100, 20, 300);
console.log(années);
