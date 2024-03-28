var vehicles;
(function (vehicles) {
    vehicles[vehicles["truck"] = 0] = "truck";
    vehicles[vehicles["car"] = 1] = "car";
    vehicles[vehicles["motorcycles"] = 2] = "motorcycles";
})(vehicles || (vehicles = {}));
console.log(vehicles.motorcycles);
