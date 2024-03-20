var describeHobbies = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    for (var _a = 0, args_1 = args; _a < args_1.length; _a++) {
        var arg = args_1[_a];
        console.log("I love ".concat(arg));
    }
};
describeHobbies("coding", "poetry", "scrolling");
