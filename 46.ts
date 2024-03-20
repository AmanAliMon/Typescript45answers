type props = {make:string,model:string,year:number};
let laptopProperties : props = {make:"Toshiba",model:"AZ563 i5",year:2025};

function describe(params:props) {
console.log(`This laptop has ${params.make} make with model ${params.model} of year ${params.year}`);

}
describe(laptopProperties)