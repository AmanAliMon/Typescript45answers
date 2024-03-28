LogProps({ make: "Tesla", model: "IDK", year: 2024, color: "gray" });
function LogProps(dict) {
    for (var key in dict) {
        console.log("".concat(key, ": ").concat(dict[key]));
    }
}
