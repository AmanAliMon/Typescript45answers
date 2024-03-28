let avgCalc = (grades: number[]) : number => {
    let sum: number = 0;
    grades.forEach(element => {
        sum += element
    });
    return sum / grades.length
}

console.log(avgCalc([10,24,64,24]));
