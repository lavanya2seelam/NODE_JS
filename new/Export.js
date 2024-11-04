function sum(a,b){
    console.log("Adding");
    console.log(a+b);
}

function sub(a,b){
    console.log("Substraction");
    console.log(a-b);
}

let name="lavanya";

module.exports={
    sum,sub
}

module.exports.lavanya=name;