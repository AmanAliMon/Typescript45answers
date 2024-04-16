var age = 18;
console.log(category(age));
function category(age) {
    if (age >= 20) {
        return 'adult';
    }
    else if (age >= 13) {
        return 'teenage';
    }
    else {
        return 'child';
    }
}
