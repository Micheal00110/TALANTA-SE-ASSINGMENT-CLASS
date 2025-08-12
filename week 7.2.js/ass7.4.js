class Appliance {
  operate() {
    throw new Error("operate() must be implemented by subclass");
  }
  describe() {
    return "Generic appliance";
  }
}

class WashingMachine extends Appliance {
  operate() {
    console.log("Washing clothes...");
  }
  describe() {
    return "A washing machine cleans laundry using water and detergent.";
  }
}

class Microwave extends Appliance {
  operate() {
    console.log("Heating food...");
  }
  describe() {
    return "A microwave heats or cooks food using electromagnetic radiation.";
  }
}

class Fan extends Appliance {
  operate() {
    console.log("Blowing air...");
  }
  describe() {
    return "A fan circulates air to cool or ventilate a space.";
  }
}

const appliances = [new WashingMachine(), new Microwave(), new Fan()];
for (const appliance of appliances) {
  appliance.operate();
  console.log(appliance.describe());
  console.log("-".repeat(40));
}