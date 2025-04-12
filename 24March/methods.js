//methods in javascript
// const calculator={
//     add:function(a,b){
//         return a+b;
//     },
//     sub:function(a,b){
//         return a-b;
//     },
//     mul:function(a,b){
//         return a*b;
//     },
//     div:function(a,b){
//         return a/b;
//     }
    
// }
// console.log(calculator.add(2,3));
// console.log(calculator.sub(5,3));
// console.log(calculator.mul(23,85));
// console.log(calculator.div(12,3))




//this keyword in javascript
const student={
    name:"B.Nithin",
    age:21,
    eng:78,
    maths:69,
    phy:71,

    getAvg(){
        let avg=(this.eng+this.maths+this.phy)/3;
        console.log(`${this.name} got avg marks of =${avg}`);
        console.log(this);
    }
}
console.log(student.getAvg());
alert("close chey ra babu");