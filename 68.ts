let addDec = (num1 : number,num2:number)  => {
    return Math.round(num1 * num2 * 100)/100
}
console.log(addDec(0.2,0.1));