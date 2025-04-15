let form=document.querySelector('form');
form.addEventListener("submit",function(event){
    event.preventDefault();
    // alert("Form is Submitted")
    let user =document.querySelector("#user")
    let pass =document.querySelector("#pass")
    // console.log(inp);
    // console.log(inp.value)
    console.log(user.value);
    console.log(pass.value);
    alert(`Hi ${user.value},Your password is set to ${pass.value}`)


})

