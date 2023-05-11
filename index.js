const car = {
  manufacturer: "Kia",
  model: "Soul",
  year: 2010,
  averageSpeed: 80,
  fuelTankCapacity: 50,
  fuelConsumption: 8,
  drivers: [],
  
  displayInfo() {
    console.log("Manufacturer:", this.manufacturer);
    console.log("Model:", this.model);
    console.log("Year:", this.year);
    console.log("Average Speed:", this.averageSpeed);
    console.log("Fuel Tank Capacity:", this.fuelTankCapacity);
    console.log("Fuel Consumption:", this.fuelConsumption);
    console.log("Drivers:", this.drivers);
  },
  
  addDriver(driverName) {
    this.drivers.push(driverName);
    console.log("Driver", driverName, "added.");
  },
  
  checkDriver(driverName) {
    if (this.drivers.includes(driverName)) {
      console.log("Driver", driverName, "is present.");
    } else {
      console.log("Driver", driverName, "is not present.");
    }
  },
  
  calculateTravelTime(distance) {
    const hours = distance / this.averageSpeed;
    const restTime = Math.floor(hours / 4);
    const totalHours = hours + restTime;
    const fuelRequired = (distance / 100) * this.fuelConsumption;
    
    console.log("Estimated Travel Time:", totalHours.toFixed(2), "hours");
    console.log("Fuel Required:", fuelRequired.toFixed(2), "liters");
  }
};

car.displayInfo();
car.addDriver("Olena");
car.checkDriver("Olena");
car.calculateTravelTime(800);