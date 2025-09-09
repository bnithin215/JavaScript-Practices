let arr=[1,2,23,4,,55,66,7,8,889,6,5,32,2233,456,778,34]
function secondLargest(arr){
    let unique=[...new Set(arr)]
    unique.sort((a,b)=>(b-a));

    return unique.length>=2 ? unique[1]:null;

}

console.log(secondLargest(arr))