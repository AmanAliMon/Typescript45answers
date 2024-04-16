function daysUntilNewYear() {
    var today = new Date();
    var currentYear = today.getFullYear();
    var newYear = new Date(currentYear + 1, 0, 1); // January 1st of the next year
    var millisecondsInADay = 1000 * 60 * 60 * 24; // Milliseconds in a day
    var difference = newYear.getTime() - today.getTime();
    var daysRemaining = Math.ceil(difference / millisecondsInADay);
    return daysRemaining;
}
var daysRemaining = daysUntilNewYear();
console.log("Days remaining until New Year: ".concat(daysRemaining));
