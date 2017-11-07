class Elevator {
  constructor() {
    this.floor = 0;
    this.MAXFLOOR = 10;
    this.requests = [];
    this.direction = 'up';
    this.waitingList = [];
    this.passengers = [];
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
      if (this.requests[0] == this.floor) {
        this._passengersLeave();
        this._passengersEnter();
        this.direction == 'up' ? this.floorUp(): this.floorDown();
        this.requests.shift();
      } else if (this.requests[0] > this.floor) {
        this.floorUp();
        this.direction = 'up';
      } else {
        this.floorDown();
        this.direction = 'down';
      }
      this.elevatorInterval = setTimeout(() => {
        this.start();
      }, 1 * 1000);
    }
  }
  _passengersEnter() {
    if (this.requests.indexOf(this.floor) != -1) {
        for (let p = 0; p < this.waitingList.length; p++) {
          if (this.waitingList[p].originFloor == this.floor) {
            this.passengers.push(this.waitingList[p]);
            this.requests.unshift(this.waitingList[p].destinationFloor);
            console.log(`${this.waitingList[p].name} has enter the elevator`);
            this.waitingList.splice(p, 1);
          }
        }
    }
  }
  _passengersLeave() {
    if (this.requests.indexOf(this.floor) != -1) {
      for (let p = 0; p < this.passengers.length; p++) {
        if (this.passengers[p].destinationFloor == this.floor) {
          console.log(`${this.passengers[p].name} has left the elevator`);
          this.passengers.splice(p, 1);
        }
      }
    }
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
    console.log(`Direction: ${this.direction} | Floor: ${this.floor} | ${this.requests}`);
  }
}

module.exports = Elevator;
