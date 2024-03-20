function createObj(key, val) {
    var object = {};
    object[key] = val;
    return object;
}
var Adjustment = createObj("color", "red");
console.log(Adjustment);
