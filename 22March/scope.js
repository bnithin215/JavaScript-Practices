let greet="hello";//global scope
function changeGreet(){
    let greet="Namaste";//function scope
    console.log(greet)
    function innerGreet(){//lexical scope
        console.log(greet)
    }
}
console.log(greet);
changeGreet(); 