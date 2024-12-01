// vehicle.ts

interface Vehicle {
    make: string;
    model: string;
    year: number;
    start(): void;
  }
  
  class Car1 implements Vehicle {
    make: string;
    model: string;
    year: number;
  
    constructor(make: string, model: string, year: number) {
      this.make = make;
      this.model = model;
      this.year = year;
    }
  
    start(): void {
      console.log("Car engine started");
    }
  }
  
  const myCar1 = new Car('Toyota', 'Corolla', 2020);
  myCar.start(); // Output: Car engine started
  