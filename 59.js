function adder(val) {
    return (function (param) { return param + val; });
}
var add8 = adder(8);
console.log(add8(2));
