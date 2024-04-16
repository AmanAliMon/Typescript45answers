function dice() {
    return Math.floor(Math.random() * 6) + 1;
}
for (var index = 0; index < 10; index++) {
    console.log(dice());
}
