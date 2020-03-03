function checkCashRegister(price, cash, cid) {
  const CURRENCY_UNITY = 0;
  const AMOUNT = 1;

  const currencyUnits = {
    "PENNY": 0.01,
    "NICKEL": 0.05,
    "DIME": 0.10,
    "QUARTER": 0.25,
    "ONE": 1.00,
    "FIVE": 5.00,
    "TEN": 10.00,
    "TWENTY": 20.00,
    "ONE HUNDRED": 100.00
  }  
  let changeValue = parseFloat((cash - price).toFixed(2));//total de troco a ser devolvido ao cliente
  let leftChangeValue = changeValue;//troco que ainda precisa ser devolvido 
  let changeArr = [];//valor em unidades monetarias a serem devolvidos
  let leftInDrawner = 0.0;

  //loop que roda o array contendo o dinheiro em caixa (cid arr)
  for (let i = cid.length - 1; i >= 0; i--) {
    const currencyUnit = cid[i][CURRENCY_UNITY];//nome da unidade monetária a ser computada
    let unitAmountInDrawner = cid[i][AMOUNT];//total da unidade monetaria em caixa
    let unitValue = currencyUnits[currencyUnit];//valor unitario da unidade sendo computada    
    
    //let totalUnitValue = 0; //total de unidade monetárias a ser devolvido ao cliente
    //let curentUnitAmout = 0; //valor total da unidade monetária atual  

    while ((leftChangeValue - unitValue).toFixed(2) >= 0 && (unitAmountInDrawner - unitValue).toFixed(2) >= 0) {
      unitAmountInDrawner = parseFloat((unitAmountInDrawner - unitValue).toFixed(2));
      leftChangeValue = parseFloat((leftChangeValue - unitValue).toFixed(2))
    }    
    if (cid[i][AMOUNT] != unitAmountInDrawner) {
      let changeToGive = parseFloat((cid[i][AMOUNT] - unitAmountInDrawner).toFixed(2));
      changeArr.push([currencyUnit, changeToGive]);      
    }
    leftInDrawner += unitAmountInDrawner;    
  }
  let cidLeft = cid.reduce((acc, cur)=>acc + cur[1],0)
  console.log({ changeArr });
  let totalChange = changeArr.reduce((acc, cur) => acc + cur[1], 0);
  console.log({ changeArr });
  console.log(totalChange);

  if (changeValue - totalChange > 0) {
    return {
      'status': "INSUFFICIENT_FUNDS",
      'change': []
    }
  }
  else if(leftInDrawner == 0)
  {
    return {
      'status': "CLOSED",
      'change': cid
    }
  }
  else {
    return {
      'status': "OPEN",
      'change': changeArr
    }
  }
  // Here is your change, ma'am.
  return;
}

// Example cash-in-drawer array:
// [["PENNY", 1.01],
// ["NICKEL", 2.05],
// ["DIME", 3.1],
// ["QUARTER", 4.25],
// ["ONE", 90],
// ["FIVE", 55],
// ["TEN", 20],
// ["TWENTY", 60],
// ["ONE HUNDRED", 100]]

//checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
//checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])
checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])