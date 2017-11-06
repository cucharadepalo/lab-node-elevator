const Elevator = require('./elevator.js');
const Person = require('./person.js');

// First: Elevator
let elevator = new Elevator();
// Then: People
let person1 = new Person('Julia', 1, 7);
let person2 = new Person('Paco', 0, 5);
let person3 = new Person('Carmen', 6, 0);
let person4 = new Person('Andrea', 3, 10);
let person5 = new Person('Irati', 1, 4);
let person6 = new Person('Curro', 4, 8);
let person7 = new Person('Andrea', 8, 0);
let person8 = new Person('Sigrid', 6, 1);
let person9 = new Person('Álvaro', 0, 9);
let person10 = new Person('Alfonso', 1, 5);
// Start the elevator
elevator.start();
elevator.call(person1);
elevator.call(person2);
elevator.call(person3);
elevator.call(person4);
elevator.call(person5);
elevator.call(person6);
elevator.call(person7);
elevator.call(person8);
elevator.call(person9);
elevator.call(person10);
console.log(elevator.waitingList);
console.log(elevator.requests);

elevator.stop();
