function adder(val : number) : (number) => number{
    return ((param : number)  => {return param+val})
}


let add8 = adder(8);
console.log(add8(2));