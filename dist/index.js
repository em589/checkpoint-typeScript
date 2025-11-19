"use strict";
// 2) Implement the Car class
class Car {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    start() {
        console.log("Car engine started");
    }
}
// 3) Create an instance and test it
const myCar = new Car("Toyota", "Corolla", 2020);
myCar.start();
