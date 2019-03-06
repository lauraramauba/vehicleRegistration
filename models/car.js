var Car = /** @class */ (function () {
    function Car(plate, brand, color) {
        this.wheels = new Array();
        this.plate = plate;
        this.brand = brand;
        this.color = color;
    }
    Car.prototype.addWheel = function (wheel) {
        this.wheels.push(wheel);
    };
    Car.prototype.validatePlate = function (plate) {
        var plateReg = /^\d{4}[A-Z]{3}$/;
        if (!(plateReg.test(plate))) {
            throw new Error('Invalid plate');
        }
    };
    return Car;
}());
