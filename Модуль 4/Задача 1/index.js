 let num1 = Number(prompt());
 let num2 = Number(prompt());
 let num3 = Number(prompt());

 function arithMean(num1, num2, num3) {
   const average = (num1 + num2 + num3)/3;
    return average;
 }

console.log(arithMean(num1, num2, num3))