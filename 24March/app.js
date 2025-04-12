// document.write("Hello World");

//function expression in javascript
function sayHello(){
    console.log("Hello World");
    return "Hello World";
} 
sayHello();
//function declaration in javascript    
function sayHello(){
    console.log("Hello World");
    return "Hello World";
}
sayHello();


//higher order function
function multipleGreet(func,n){
    for(let i=1;i<=n;i++){
        func();
    }
    
}
let greet=function(n){
    console.log("Hello World");
}
multipleGreet(greet,10);


//returning in higher order function
function oddEvenTest(request){
    if(request=="odd"){
        return function(n){
            console.log(!(n%2==0));

        }
    }else if(request=="even"){
        return function(n){
            console.log((n%2==0));
       } 
    }else{
    console.log("invalid input")
   }
}


//methods in javascript
const calculator={
    add:function(a,b){
        return a+b;
    },
    sub:function(a,b){
        return a-b;
    },
    mul:function(a,b){
        return a*b;
    }
}