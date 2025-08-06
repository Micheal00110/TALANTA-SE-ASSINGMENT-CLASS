class Car {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  getDetails() {
    return `${this.make} ${this.model} ${this.year}`;
  }
}
const myCar = new Car("my first car is", "Toyota Corolla", 2015);
console.log(myCar.getDetails()); 

const anotherCar = new Car("my second car is", "Audi TTrs", 2018);
console.log(anotherCar.getDetails());
