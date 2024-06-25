class Vehicle {
    public status:string = "stopped"
    public make:string;
    public model:string;
    public wheels:string;
    
    constructor(make:string, model:string, wheels:number) {
      this.make = make;
      this.model = model;
      this.wheels = wheels;
      
    }
    start() {
      this.status = "started";
    }
    stop() {
      this.status = "stopped";
    }
  }
  
  class Car extends Vehicle {
    constructor(make:string, model:string) {
      super(make, model, 4);
    }
  }
  
  class MotorCycle extends Vehicle {
    constructor(make:string, model:string ) {
      super(make, model, 2);
    }
  }
  
  function printStatus(vehicle:string) {
    if (vehicle.status === "running") {
      console.log("The vehicle is running.");
    } else {
      console.log("The vehicle is stopped.");
    }
  }
  
  const myHarley = new MotorCycle("Harley-Davidson", "Low Rider S");
  myHarley.start();
  printStatus(myHarley);
  console.log(myHarley.make.toUppercase());
  
  const myBuick = new Car("Buick", "Regal");
  myBuick.wheels = myBuick.wheels - 1;
  console.log(myBuick.wheels);
  console.log(myBuick.model);