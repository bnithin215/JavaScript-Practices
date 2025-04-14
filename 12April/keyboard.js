let input=document.querySelector('input');
// input.addEventListener("keypress",function(){
//     console.log("key was pressed")});
input.addEventListener("keydown",function(event){
    // console.log(event.key);
     console.log(event.code);
    // console.log("key was pressed")});

    if(event.code=="ArrowUp"){
     console.log("moves Forward");
    }else if(event.code=="ArrowDown"){
     console.log("Moves Backward");
    }else if(event.code=="ArrowLeft"){
     console.log("Moves left");
    }else if(event.code=="ArrowRight"){
     console.log("Moves Right");
    }
});
