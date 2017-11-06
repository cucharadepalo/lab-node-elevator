class Elevator {
  constructor(){
    this.floor = 0;
    this.MAXFLOOR = 10;
    this.requests = [];
    this.direction = 'static';
    this.waitingList = [];
    this.passengers = [];
  }

  start() {
    let liftInterval  = setInterval(() => {
      this.update();
    }, 1 * 1000);
  }
  stop() {
    clearInterval(this.liftInterval);
  }
  update() {
    this.log();
  }
  _passengersEnter(person) {
    this.passengers.push(person);
    let indexToRemove = this.waitingList.indexOf(person);
    this.waitingList.splice(indexToRemove, 1);
    this.requests.push(person.destinationFloor);
    console.log(`${person.name} has enter the elevator`);
  }
  _passengersLeave() {

    
  }
  floorUp() {
    this.floor < 10 ? this.floor++ : this.floor;
  }
  floorDown() {
    this.floor > 0 ? this.floor-- : this.floor;
  }
  call(person) {
    this.waitingList.push(person);
    this.requests.push(person.originFloor);
  }
  log() {
    if (this.requests.length > 0 && this.requests[0] > this.floor) {
      this.direction = 'up';
    }
    else if (this.requests.length > 0 && this.requests[0] < this.floor) {
      this.direction = 'down';
    }
    console.log(`Direction: ${direction} | Floor: ${this.floor}`);
  }
}

module.exports = Elevator;
