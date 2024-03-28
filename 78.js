function funcDeclaration(x) {
    return Math.pow(x, 2);
}
var funcExperession = function (x) {
    return Math.pow(x, 2);
};
console.log(funcDeclaration(3));
console.log(funcExperession(2));
