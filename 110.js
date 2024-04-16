var gradeDecider = function (percentage) {
    var distrib = [100, 80, 70, 60, 50, 40];
    var grade = '';
    distrib.forEach(function (a, b) {
        console.log(a);
        if (percentage <= a && percentage >= distrib[b + 1]) {
            grade = String.fromCharCode(64 + b);
        }
    });
    return grade != '@' ? grade : 'A+';
};
var marks = 69;
console.log("Grade at percentage ".concat(marks, " is ").concat(gradeDecider(marks)));
