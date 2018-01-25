var A = /** @class */ (function () {
    function A() {
        console.log('A is called');
    }
    A.prototype.getA = function (a) {
        if (a === void 0) { a = 0; }
        return a;
    };
    return A;
}());
new A();
