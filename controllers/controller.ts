let submitCarInfo = document.getElementById("submit-info");
let submitWheelsInfo = document.getElementById("submit-wheels");

submitCarInfo.onclick = function () {

    function getCarInfo() {
        let carPlate = (<HTMLInputElement>document.getElementById("plate")).value.toUpperCase();
        let carBrand = (<HTMLInputElement>document.getElementById("brand")).value;
        let carColor = (<HTMLInputElement>document.getElementById("color")).value;

        carInfoNotEmpty(carPlate, carBrand, carColor);
        addCar(carPlate, carBrand, carColor);
    }
    getCarInfo();

    function carInfoNotEmpty(carPlate, carBrand, carColor) {
        let check = (carPlate !== "" && carBrand !== "" && carColor !== "");
        return check;
    }

    function addCar(carPlate, carBrand, carColor) {
        if (carInfoNotEmpty(carPlate, carBrand, carColor)) {
            document.getElementById("car-alert").innerHTML = "";
            document.getElementById("car-section").classList.remove('hide');
            document.getElementById("plate-validation").innerHTML = "";
            createCar(carPlate, carBrand, carColor);
        } else {
            document.getElementById("car-section").classList.add('hide');
            document.getElementById("car-alert").innerHTML = "Please fill every field";
        }
    }
}

function createCar(plate: string, brand: string, color: string) {
    let car = new Car(plate, brand, color);
    try {
        car.validatePlate(plate);
        (<HTMLInputElement>document.getElementById("carInfo")).innerHTML = "Your car:" + '<br>' +
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
        let frontLeftDiameter = (<HTMLInputElement>document.getElementById("diameter-front-left")).value;
        let frontLeftBrand = (<HTMLInputElement>document.getElementById("brand-front-left")).value;
        let frontRightDiameter = (<HTMLInputElement>document.getElementById("diameter-front-right")).value;
        let frontRightBrand = (<HTMLInputElement>document.getElementById("brand-front-right")).value;
        let frontLeftWheelsInfo = document.getElementById("front-car-wheels-left");
        let frontRightWheelsInfo = document.getElementById("front-car-wheels-right");

        isNotEmpty(frontLeftDiameter, frontLeftBrand, frontRightDiameter, frontRightBrand);
        addWheel(frontLeftDiameter, frontLeftBrand, frontRightDiameter, frontRightBrand, frontLeftWheelsInfo, frontRightWheelsInfo);
    }
    getFrontWheels();

    function getBackWheels() {
        let backLeftDiameter = (<HTMLInputElement>document.getElementById("diameter-back-left")).value;
        let backLeftBrand = (<HTMLInputElement>document.getElementById("brand-back-left")).value;
        let backRightDiameter = (<HTMLInputElement>document.getElementById("diameter-back-right")).value;
        let backRightBrand = (<HTMLInputElement>document.getElementById("brand-back-right")).value;
        let backLeftWheelsInfo = document.getElementById("back-car-wheels-left");
        let backRightWheelsInfo = document.getElementById("back-car-wheels-right");

        isNotEmpty(backLeftDiameter, backLeftBrand, backRightDiameter, backRightBrand);
        addWheel(backLeftDiameter, backLeftBrand, backRightDiameter, backRightBrand, backLeftWheelsInfo, backRightWheelsInfo);
    }
    getBackWheels();

    function isNotEmpty(leftDiameter, leftBrand, rightDiameter, rightBrand) {
        let check = (leftDiameter !== "" && leftBrand !== "" && rightDiameter !== "" && rightBrand !== "");
        return check;
    }

    function addWheel(leftDiameter, leftBrand, rightDiameter, rightBrand, leftInfo, rightInfo) {
        if (isNotEmpty(leftDiameter, leftBrand, rightDiameter, rightBrand)) {
            document.getElementById("wheels-alert").innerHTML = "";
            document.getElementById("diameter-alert").innerHTML = "";
            createWheel(leftInfo, Number(leftDiameter), leftBrand);
            createWheel(rightInfo, Number(rightDiameter), rightBrand);
        } else {
            document.getElementById("wheels-alert").innerHTML = "Please fill every field";
        }
    }
}

function createWheel(form: HTMLElement, diameter: number, brand: string) {
    let wheel = new Wheel(diameter, brand);
    try {
        wheel.validateDiameter(diameter);
        form.innerHTML = ` <span>${wheel.diameter}m ${wheel.brand}</span>`;
    }
    catch (e) {
        document.getElementById("wheels-alert").innerHTML = "";
        document.getElementById("diameter-alert").innerHTML = e.message;
    }
}