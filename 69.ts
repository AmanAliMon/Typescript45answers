let divsionProps = (dividend : number,divisor: number) : {remainder:number,quotient:number} =>{
    let remainder = dividend%divisor
    return  {remainder: remainder,quotient: (dividend - remainder)/divisor}
} 
console.log(divsionProps(8,3));
