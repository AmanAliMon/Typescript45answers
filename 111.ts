let age  = 18
console.log(category(age));
function category(age:number){
if (age >= 20) {
    return 'adult'
} else if(age>=13) {
    return 'teenage'
}else{
    return 'child'
}

}