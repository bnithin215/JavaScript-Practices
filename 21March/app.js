// function nithin(){
//     console.log("Hello Nithin");

// }
// nithin(); 

//create a function that prints poem
// function poem(){
//     let poem="Johny Johny, yes Papa? Eating sugar? No Papa! Telling lies? No Papa! Open your mouth! Ha! Ha! Ha! 😆"
//     console.log(poem);
// }
// poem();


//create a function that rolls a dice and always gives a random number between 1 and 6
// function rollDice(){
//     let random=Math.floor(Math.random()*6)+1
//     console.log(random);
// }
// rollDice();

//arguments and parameters
// function printInfo(name,age,gender){
//     console.log(`Hello ${name}, you are ${age}Years old and your gender is ${gender}`);
// }
// printInfo("Nithin",21,"male")

// sum of two numbers
// function sum(a,b){
//     console.log(a+b);
// }
// sum(1,2);
// sum(3,4);
// sum(5,6);
// sum(7,8);


//function to find average of three numbers
// function average(a,b,c){
//     console.log((a+b+c)/3);

// }
// average(2,3,4);


//printimg multiplication table of a number using function
// function printTable(n){
//     for(let i=n;i<=n*10;i+=n)
//     console.log(i)
// }
// printTable(5);


//print table from 
function getSum(n){
    let sum=0;
    for(let i=1;i<=n;i++){
      sum += i;
    }
    return sum;
  }
  getSum(6,7);