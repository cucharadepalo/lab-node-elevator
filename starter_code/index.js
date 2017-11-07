const Elevator = require('./elevator.js');
const Person = require('./person.js');

// First: Elevator
let elevator = new Elevator();
// Start the elevator
elevator.start();
// Create people calls
setTimeout(() => {elevator.call(new Person('Julia', 1, 7));}, 2000);
setTimeout(() => {elevator.call(new Person('Paco', 0, 5));}, 2500);
setTimeout(() => {elevator.call(new Person('Carmen', 6, 0));}, 3000);
setTimeout(() => {elevator.call(new Person('Andrea', 3, 10));}, 3000);
setTimeout(() => {elevator.call(new Person('Irati', 1, 4));}, 4000);
setTimeout(() => {elevator.call(new Person('Curro', 4, 8));}, 6000);
setTimeout(() => {elevator.call(new Person('Luisa', 8, 0));}, 8000);
setTimeout(() => {elevator.call(new Person('Sigrid', 6, 1));}, 9000);
setTimeout(() => {elevator.call(new Person('Álvaro', 0, 9));}, 9500);
setTimeout(() => {elevator.call(new Person('Alfonso', 1, 5));}, 10000);
