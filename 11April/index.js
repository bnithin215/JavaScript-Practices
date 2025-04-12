let btn=document.querySelector('button');
btn.addEventListener('click',function(){
    let h3=document.querySelector('h3');
    let randomColor=getRandomColor();
    h3.innerText=getRandomColor();
    console.log("color updated")

    let div=document.querySelector('div');
    div.style.backgroundColor=randomColor;
})
function getRandomColor(){
    let red=Math.floor(Math.random()*255);
    let Green=Math.floor(Math.random()*255);
    let Blue=Math.floor(Math.random()*255);

    let color =`rgb(${red},${Green},${Blue})`;
    return color;

}