// Person = function (name, birthYear) {
//   this.name = name;
//   this.birthYear = birthYear;
// };

// const omer = new Person("Ömer", 1998);

// console.log(Person.prototype);

// Person.prototype.calcAge = function () {
//   console.log(new Date().getFullYear() - this.birthYear);
// };

// Person.prototype.showName = function () {
//   console.log(this.name);
// };

// omer.calcAge();

Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(this.speed);
};

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(this.speed);
};

const bmw = new Car("bmw", 120);
const mercedes = new Car("mercedes", 95);

bmw.accelerate();
mercedes.accelerate();
