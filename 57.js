var grades = [89.81, 86.03, 69.81, 69.12];
var sum = 0;
grades.forEach(function (element) {
    sum += element;
});
var avg = sum / grades.length;
console.log(avg);
