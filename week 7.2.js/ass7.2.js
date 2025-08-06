class Student {
  #marks = [];               

  addMark(m) {                
    if (m < 0 || m > 100) throw 'Mark must be 0-100';
    this.#marks.push(m);
  }

  getAverage() {            
    let sum = this.#marks.reduce((a, b) => a + b, 0);
    return sum / this.#marks.length || 0;
  }

  getMarks() {              
    return [...this.#marks];
  }
}

let stu = new Student();
stu.addMark(90);
stu.addMark(80);
console.log(stu.getMarks());   
console.log(stu.getAverage()); 


class Appliance {
  turnOn() {
    throw 'turnOn() must be implemented';
  }
}

class WashingMachine extends Appliance {
  turnOn() {
    console.log('Washing machine started.');
  }
}

class Microwave extends Appliance {
  turnOn() {
    console.log('Microwave started.');
  }
}


new WashingMachine().turnOn(); 
new Microwave().turnOn();      