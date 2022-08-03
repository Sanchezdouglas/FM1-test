'use strict'

function BinarioADecimal(num) {
  // tu codigo aca
  let arr= num.toString().split("").reverse().join("")
  let Decimal = 0;
  for(let i=0; i<arr.length;i++) {
    Decimal += (Math.pow(2,1)*arr[i])
  }
  return Decimal;
}

function DecimalABinario(num) {
  // tu codigo aca
  let arr = [];
  let resto = 0;
  while(num>0) {
    resto = num % 2;
    num = Math.floor(num/2);
    arr.unshift(resto);
  }
  return arr.joi("");
}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}