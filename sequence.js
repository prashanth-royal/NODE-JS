//Random function to get single digit number
let num = Math.floor(Math.random()*10);
console.log("single digit num is: "+num);

//Use random to get dice number
let randomDice = Math.floor(Math.random()*6)+1;
console.log("random dice is: "+randomDice);

//add two random dice number
let randomDice1 = Math.floor(Math.random()*6)+1;
let randomDice2 = Math.floor(Math.random()*6)+1;
let addition = randomDice1 + randomDice2;
console.log("Addition of two random dice is: " +addition);

//5random 2digit values and their sum and average
let num1 = Math.floor(Math.random()*89)+10;
let num2 = Math.floor(Math.random()*89)+10;
let num3 = Math.floor(Math.random()*89)+10;
let num4 = Math.floor(Math.random()*89)+10;
let num5 = Math.floor(Math.random()*89)+10;
let sum = num1 + num2 + num3 + num4 + num5;
let avg = sum / 5;
console.log("sum of 5random 2digit values is: "+sum);
console.log("avg of 5random 2digit values is: "+avg);
