var prof = (function () {
    var _name = "Aman Ali";
    var _age = 18;
    return { displaySelf: function () {
            console.log("Name: ".concat(_name, "\n age: ").concat(_age));
        } };
})();
prof.displaySelf();
