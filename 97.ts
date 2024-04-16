function gimmeDate(){
// Get current date
var currentDate = new Date();

// Get day, month, and year
var day :string|number = currentDate.getDate();
var month :string|number = currentDate.getMonth() + 1; // January is 0, so we add 1
var year :string|number  = currentDate.getFullYear();

// If day or month is less than 10, prepend '0' to maintain the format
if (day < 10) {
    day = '0' + String(day);
}
if (month < 10) {
    month = '0' + String(month);
}

// Combine day, month, and year into the desired format
var formattedDate = day + '-' + month + '-' + year;

console.log(formattedDate); // Output: dd-mm-yyyy
    
}
gimmeDate()