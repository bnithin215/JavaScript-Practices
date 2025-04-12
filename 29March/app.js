//Destructing an Array
// let names=["Sahith","rishi","Shashi","Uday","Sanjay"];
// let[winner,runnerup]=names;
// console.log(winner);


//destrctiong an object
// const student={
//     name:"altaf",
//     age:21,
//     username:"mdaltaf@gmail.com",
//     password:"JaiHind"
// }
// let{username,password}=student;
// console.log(username)


//assignment problems
//1st 
let nums=[1,2,3,4,5,6];
let square=nums.map((nums)=>nums*nums);//array function to find square
console.log(square);
let sum=square.reduce((a,c)=>a+c,0);//array function to  create sum
console.log(sum);
let avg=sum/nums.length;//finding avg
console.log(avg);

//2nd
let numbers=[1,2,3,4,56,7,88,9];
let numsss=numbers.map((numbers)=>numbers+5);
console.log(numsss)

//3rd
let strings=["nithin","sahith","rishika","latha","saii"];
let str=strings.map((string)=>string.toUpperCase());
console.log(str);