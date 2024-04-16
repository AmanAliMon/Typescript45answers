function generateRandomHexColor() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    var rHex = (r < 16 ? '0' : '') + r.toString(16);
    var gHex = (g < 16 ? '0' : '') + g.toString(16);
    var bHex = (b < 16 ? '0' : '') + b.toString(16);
    var hexColor = "#".concat(rHex).concat(gHex).concat(bHex);
    return hexColor;
}
var randomColor = generateRandomHexColor();
console.log(randomColor);
