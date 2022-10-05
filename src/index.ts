let années: number = 0;

function DepositProfit(
  deposit: number,
  rate: number,
  treshold: number
): number {

  
  while (deposit < treshold) {
   let interets = (deposit * rate) / 100;
    console.log(interets)
    deposit = deposit + interets;
    années = années + 1;
   // console.log(depoInit)
    
  }
  return années;
}

DepositProfit(100, 20, 300);

console.log(années);
