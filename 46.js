var laptopProperties = { make: "Toshiba", model: "AZ563 i5", year: 2025 };
function describe(params) {
    console.log("This laptop has ".concat(params.make, " make with model ").concat(params.model, " of year ").concat(params.year));
}
describe(laptopProperties);
