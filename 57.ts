let grades : number[] = [89.81,86.03,69.81,69.12]
let sum : number = 0;
grades.forEach(element => {
    sum += element
});
let avg : number = sum/grades.length

console.log(avg);
