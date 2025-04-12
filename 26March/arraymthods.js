//ForEach 
let arr=[1,2,3,4,5,6,7];
arr.forEach((el)=>{
    console.log(el)
})

//map
let num=[1,2,3,4,5];
let double=num.map((el)=>el*2)
console.log(double)


function isOdd(num) {
    return num % 2 !== 0;
}
console.log(isOdd(57));  // false
