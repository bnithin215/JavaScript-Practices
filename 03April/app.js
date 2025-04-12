let btns=document.querySelectorAll("button");

for(btn of btns){
    // btn.onclick=sayHello;
    btn.addEventListener('click',sayHello )
        console.log('button is pressed');
}

function sayHello(){
    alert("namskaram Masteruu")
}
// console.dir(btn);
// btn.onclick=function(){
//     alert("button was clicked")
//     console.log("Nithin believe in your self")
// }
function checkMe(){
    document.getElementById("my-checkbox").checked=true;
}
