class Elevator {
  constructor() {
    this.floor = 0;
    this.MAXFLOOR = 10;
    this.requests = [];
    this.direction = 'idle';
    this.waitingList = [];
    this.passengers = [];
  }

  start() {
    let elevatorInterval = setInterval(() => {
      this.update();
    }, 1 * 1000);
  }
  stop() {
    clearInterval(this.elevatorInterval);
  }
  update() {
    this.log();
  }
  _passengersEnter() {
    if (this.requests.indexOf(this.floor) != -1) {
        for (let p = 0; p < this.waitingList.length; p++) {
          if (this.waitingList[p].originFloor == this.floor) {
            this.passengers.push(this.waitingList[p]);
            this.waitingList.splice(p, 1);
            this.requests.push(this.waitingList[p].destinationFloor);
            console.log(`${this.waitingList[p].name} has enter the elevator`);
          }
        }
    }
  }
  _passengersLeave() {
    if (this.requests.indexOf(this.floor) != -1) {
      for (let p = 0; p < this.passengers.length; p++) {
        if (this.passengers[p].destinationFloor == this.floor) {
          this.passengers.splice(p, 1);
          console.log(`${this.passengers[p].name} has left the elevator`);
        }
      }
    }
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
    } else if (this.requests.length > 0 && this.requests[0] < this.floor) {
      this.direction = 'down';
    }
    console.log(`Direction: ${this.direction} | Floor: ${this.floor}`);
  }
}

module.exports = Elevator;
