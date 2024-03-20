function createObj (key : string,val:string){
    let object={}
    object[key]=val
    return object
}
let Adjustment = createObj("color","red")
console.log(Adjustment);
