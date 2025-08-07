class Appliance {
  operate() {}
}

class WashingMachine extends Appliance {
  operate() {
    console.log("Washing clothes...");
  }
  describe() {
    console.log("WashingMachine: Cleans laundry automatically with water and detergent.");
  }
}

class Microwave extends Appliance {
  operate() {
    console.log("Heating food...");
  }
  describe() {
    console.log("Microwave: Heats or cooks food quickly using electromagnetic radiation.");
  }
}

class Fan extends Appliance {
  operate() {
    console.log("Blowing air...");
  }
  describe() {
    console.log("Fan: Circulates air to cool a room or provide ventilation.");
  }
}

const appliances = [new WashingMachine(), new Microwave(), new Fan()];
appliances.forEach(a => a.operate());
console.log("\n--- Bonus: Descriptions ---");
appliances.forEach(a => a.describe());