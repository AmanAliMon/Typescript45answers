var avgCalc = function (grades) {
    var sum = 0;
    grades.forEach(function (element) {
        sum += element;
    });
    return sum / grades.length;
};
console.log(avgCalc([10, 24, 64, 24]));
