class Pet {
  #adoptionStatus = "available";
  constructor(name, age, type, sound) {
    this.name = name;
    this.age = age;
    this.type = type;
    this.sound = sound;
  }
  makeSound() {
    console.log(`${this.name} says: ${this.sound}`);
  }
  getDetails() {
    return `${this.name} is a ${this.age}-year-old ${this.type}.`;
  }
  getAdoptionStatus() {
    return this.#adoptionStatus;
  }
  adopt() {
    if (this.#adoptionStatus === "adopted") {
      console.log(`${this.name} already has a family!`);
      return;
    }
    this.#adoptionStatus = "adopted";
    console.log(`${this.name} was just adopted! 🎉`);
  }
}

class Dog extends Pet {
  constructor(name, age) {
    super(name, age, "Dog", "Woof!");
  }
  makeSound() {
    console.log(`${this.name} barks: ${this.sound}`);
  }
  fetchBall() {
    console.log(`${this.name} dashes after the tennis ball.`);
  }
}

class Cat extends Pet {
  constructor(name, age) {
    super(name, age, "Cat", "Meow");
  }
  makeSound() {
    console.log(`${this.name} purrs: ${this.sound}`);
  }
  climbTree() {
    console.log(`${this.name} scrambles up the cat tree like a pro.`);
  }
}

class Staff {
  performDuty() {
    throw new Error("Staff must implement performDuty()");
  }
}

class Vet extends Staff {
  constructor(name) {
    super();
    this.name = name;
  }
  performDuty() {
    console.log(`${this.name} is giving vaccines and checking health.`);
  }
}

class Trainer extends Staff {
  constructor(name) {
    super();
    this.name = name;
  }
  performDuty() {
    console.log(`${this.name} is teaching the pets basic commands.`);
  }
}

class PetAdoptionCenter {
  pets = [];
  staff = [];
  addPet(pet) {
    this.pets.push(pet);
  }
  addStaff(member) {
    this.staff.push(member);
  }
  listAvailablePets() {
    console.log("Available pets:");
    this.pets
      .filter(p => p.getAdoptionStatus() === "available")
      .forEach(p => console.log(`- ${p.getDetails()}`));
  }
  adoptPet(name) {
    const pet = this.pets.find(p => p.name === name && p.getAdoptionStatus() === "available");
    pet ? pet.adopt() : console.log(`No available pet named ${name}.`);
  }
}

const center = new PetAdoptionCenter();
const rex = new Dog("Rex", 3);
const fluffy = new Cat("Fluffy", 2);
center.addPet(rex);
center.addPet(fluffy);
const drJane = new Vet("Dr. Jane");
const jake = new Trainer("Jake");
center.addStaff(drJane);
center.addStaff(jake);

const everyone = [...center.pets, ...center.staff];
everyone.forEach(e => {
  if (e instanceof Pet) {
    console.log(e.getDetails());
    e.makeSound();
  } else {
    e.performDuty();
  }
});

center.listAvailablePets();
center.adoptPet("Rex");
center.listAvailablePets();