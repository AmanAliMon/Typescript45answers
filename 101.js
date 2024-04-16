var rand = function () {
    return parseInt(String(Math.random() * 10));
};
for (var i = 0; i < 10; i++) {
    console.log(rand());
}
