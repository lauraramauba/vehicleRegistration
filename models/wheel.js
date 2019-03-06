var Wheel = /** @class */ (function () {
    function Wheel(diameter, brand) {
        this.diameter = diameter;
        this.brand = brand;
    }
    Wheel.prototype.validateDiameter = function (diameter) {
        if (!(diameter >= 0.4 && diameter <= 2)) {
            throw new Error(" Diameters must be between 0.4 and 2");
        }
    };
    return Wheel;
}());
