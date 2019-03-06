class Wheel{
    public diameter:number;
    public brand:string;

    constructor(diameter:number, brand:string){
        this.diameter=diameter;
        this.brand=brand;
    }

    validateDiameter(diameter:number) {
        if (!(diameter >= 0.4 && diameter <= 2)) {
            throw new Error(` Diameters must be between 0.4 and 2`);
        }
    }
}