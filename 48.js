var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var priceofset1 = [4e4, 5e4, 2e2];
var priceofset2 = [12e4, 23e4, 54300];
// Concatenate the arrays and sort the resulting array
var sortedPrices = __spreadArray(__spreadArray([], priceofset1, true), priceofset2, true).sort(function (a, b) { return a - b; });
console.log(sortedPrices);
