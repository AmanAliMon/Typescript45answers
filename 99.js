var findBirthday = function (month, day) {
    var now = new Date();
    var year = now.getFullYear();
    var bd = new Date(year, month - 1, day);
    if (bd < now) {
        bd.setFullYear(year + 1);
    }
    return bd;
};
var bd = findBirthday(1, 18);
console.log("Next birthday on:", bd.toLocaleDateString());
