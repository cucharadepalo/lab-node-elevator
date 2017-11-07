class Elevator {
  constructor() {
    this.floor = 0;
    this.MAXFLOOR = 10;
    this.requests = [];
    this.waitingList = [];
    this.passengers = [];
    this.direction = 'up';
  }

  start() {
    this.elevatorInterval = setInterval(() => {
      this.update();
    }, 1 * 1000);
  }
  stop() {
    clearInterval(this.elevatorInterval);
  }
  update() {
    this.log();
    if (this.requests.length > 0) {
      this.stop();
      this._passengersLeave();
      this._passengersEnter();
      if (this.passengers.length > 0) {
        this.passengers[0].destinationFloor > this.floor ? this.direction = 'up' : this.direction = 'down';
      }
      this.direction == 'up' ? this.floorUp(): this.floorDown();
      this.elevatorInterval = setTimeout(() => {
        this.start();
      }, 1 * 1000);
    }
  }
  _passengersEnter() {
    this.waitingList.forEach((person, index) => {
      if (person.originFloor == this.floor) {
        this.passengers.push(person);
        console.log(`${person.name} has enter the elevator`);
        this.requests.push(person.destinationFloor);
        let cleanRequests = this.requests.indexOf(person.originFloor);
        this.requests.splice(cleanRequests, 1);
        this.waitingList.splice(index, 1);
      }
    });
  }

  _passengersLeave() {
    this.passengers.forEach((passenger, index) => {
      if (passenger.destinationFloor == this.floor) {
        console.log(`${passenger.name} has left the elevator`);
        let cleanRequests = this.requests.indexOf(passenger.destinationFloor);
        this.requests.splice(cleanRequests, 1);
        this.passengers.splice(index, 1);
      }
    });
  }
  floorUp() {
    if (this.floor < this.MAXFLOOR) this.floor++;
  }
  floorDown() {
    if (this.floor > 0 ) this.floor--;
  }
  call(person) {
    this.waitingList.push(person);
    this.requests.push(person.originFloor);
  }
  log() {
    console.log(`Direction: ${this.direction} | Floor: ${this.floor} | ${this.requests} | ${this.passengers.length}`);
  }
}

module.exports = Elevator;
