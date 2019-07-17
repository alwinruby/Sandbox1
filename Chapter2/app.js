class Car {
  constructor(doors, engine, colour){
    this.doors = doors;
    this.enngie = engine;
    this.colour = colour;
  }

  carStats(){
    return `This car has ${this.doors} doors, a ${this.engine} and a beautiful ${this.colour} colour!`;
  }
}

const cx5 = new Car( 4, 'V6', 'green' )

console.log(cx5);

console.log(cx5.carStats());
