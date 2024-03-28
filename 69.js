var divsionProps = function (dividend, divisor) {
    var remainder = dividend % divisor;
    return { remainder: remainder, quotient: (dividend - remainder) / divisor };
};
console.log(divsionProps(10, 3));
