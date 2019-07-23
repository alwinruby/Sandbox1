class Car {
  constructor(doors, engine, colour){
    this.doors = doors;
    this.enngie = engine;
    this.colour = colour;
  }

  carStats(){
    return `This car has ${this.doors} doors, a ${this.engine} and a beautiful ${this.colour} colour!`;
  }

  static totalDoors(car1, car2) {
    const doors1 = car1.doors;
    const doors2 = car2.doors;

    return doors1 + doors2;
  }
}

const cx5 = new Car( 4, 'V6', 'green' )
const civic = new Car( 3, 'V4', 'red' )

console.log(cx5);
// console.log(cx5.carStats());
// console.log(civic);
// console.log(civic.carStats());
// console.log(Car.totalDoors(cx5, civic));
