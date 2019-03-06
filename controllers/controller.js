var submitCarInfo = document.getElementById("submit-info");
var submitWheelsInfo = document.getElementById("submit-wheels");
submitCarInfo.onclick = function () {
    function getCarInfo() {
        var carPlate = document.getElementById("plate").value.toUpperCase();
        var carBrand = document.getElementById("brand").value;
        var carColor = document.getElementById("color").value;
        carInfoNotEmpty(carPlate, carBrand, carColor);
        addCar(carPlate, carBrand, carColor);
    }
    getCarInfo();
    function carInfoNotEmpty(carPlate, carBrand, carColor) {
        var check = (carPlate !== "" && carBrand !== "" && carColor !== "");
        return check;
    }
    function addCar(carPlate, carBrand, carColor) {
        if (carInfoNotEmpty(carPlate, carBrand, carColor)) {
            document.getElementById("car-alert").innerHTML = "";
            document.getElementById("car-section").classList.remove('hide');
            document.getElementById("plate-validation").innerHTML = "";
            createCar(carPlate, carBrand, carColor);
        }
        else {
            document.getElementById("car-section").classList.add('hide');
            document.getElementById("car-alert").innerHTML = "Please fill every field";
        }
    }
};
function createCar(plate, brand, color) {
    var car = new Car(plate, brand, color);
    try {
        car.validatePlate(plate);
        document.getElementById("carInfo").innerHTML = "Your car:" + '<br>' +
            "Plate: " + '<span>' + car.plate + '</span><br>' +
            "Brand: " + '<span>' + car.brand + '</span><br>' +
            "Color: " + '<span>' + car.color + '</span><br>';
    }
    catch (e) {
        document.getElementById("car-section").classList.add('hide');
        document.getElementById("plate-validation").innerHTML = e.message;
    }
}
submitWheelsInfo.onclick = function () {
    function getFrontWheels() {
        var frontLeftDiameter = document.getElementById("diameter-front-left").value;
        var frontLeftBrand = document.getElementById("brand-front-left").value;
        var frontRightDiameter = document.getElementById("diameter-front-right").value;
        var frontRightBrand = document.getElementById("brand-front-right").value;
        var frontLeftWheelsInfo = document.getElementById("front-car-wheels-left");
        var frontRightWheelsInfo = document.getElementById("front-car-wheels-right");
        isNotEmpty(frontLeftDiameter, frontLeftBrand, frontRightDiameter, frontRightBrand);
        addWheel(frontLeftDiameter, frontLeftBrand, frontRightDiameter, frontRightBrand, frontLeftWheelsInfo, frontRightWheelsInfo);
    }
    getFrontWheels();
    function getBackWheels() {
        var backLeftDiameter = document.getElementById("diameter-back-left").value;
        var backLeftBrand = document.getElementById("brand-back-left").value;
        var backRightDiameter = document.getElementById("diameter-back-right").value;
        var backRightBrand = document.getElementById("brand-back-right").value;
        var backLeftWheelsInfo = document.getElementById("back-car-wheels-left");
        var backRightWheelsInfo = document.getElementById("back-car-wheels-right");
        isNotEmpty(backLeftDiameter, backLeftBrand, backRightDiameter, backRightBrand);
        addWheel(backLeftDiameter, backLeftBrand, backRightDiameter, backRightBrand, backLeftWheelsInfo, backRightWheelsInfo);
    }
    getBackWheels();
    function isNotEmpty(leftDiameter, leftBrand, rightDiameter, rightBrand) {
        var check = (leftDiameter !== "" && leftBrand !== "" && rightDiameter !== "" && rightBrand !== "");
        return check;
    }
    function addWheel(leftDiameter, leftBrand, rightDiameter, rightBrand, leftInfo, rightInfo) {
        if (isNotEmpty(leftDiameter, leftBrand, rightDiameter, rightBrand)) {
            document.getElementById("wheels-alert").innerHTML = "";
            document.getElementById("diameter-alert").innerHTML = "";
            createWheel(leftInfo, Number(leftDiameter), leftBrand);
            createWheel(rightInfo, Number(rightDiameter), rightBrand);
        }
        else {
            document.getElementById("wheels-alert").innerHTML = "Please fill every field";
        }
    }
};
function createWheel(form, diameter, brand) {
    var wheel = new Wheel(diameter, brand);
    try {
        wheel.validateDiameter(diameter);
        form.innerHTML = " <span>" + wheel.diameter + "m " + wheel.brand + "</span>";
    }
    catch (e) {
        document.getElementById("wheels-alert").innerHTML = "";
        document.getElementById("diameter-alert").innerHTML = e.message;
    }
}
