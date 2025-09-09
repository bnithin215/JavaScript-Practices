function isArmStrong(num){
    let strNUm=num.toString();
    let power=strNUm.length;
    let sum=0;

    for (let digit of strNUm){
        sum+=Math.pow(Number(digit),power)
    }
    return sum ===num;
}  
console.log(isArmStrong(153))
