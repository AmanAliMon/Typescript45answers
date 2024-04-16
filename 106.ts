function isLeap(year:number) :boolean{
    return year%4 == 0 ? true : false
}
console.log(isLeap(2024));
console.log(isLeap(2023));