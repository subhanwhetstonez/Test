var x = 10;
{
  let x = 2;
}
//document.getElementById("print").innerHTML = x;

/*var z = function (x, y) {
  return x * y;
};*/

const z = (x, y) => x * y;
document.getElementById("print").innerHTML = z(10, 20);

const q1 = ["Jan", "Feb", "Mar"];
const q2 = ["Apr", "May", "Jun"];
const q3 = ["Jul", "Aug", "Sep"];
const q4 = ["Oct", "Nov", "May"];

const year = [...q1, ...q2, ...q3, ...q4];
document.getElementById("demo").innerHTML = year;

const numbers = [23, 55, 21, 87, 56];
let maxValue = Math.max(...numbers);

document.getElementById("number").innerHTML = maxValue;

export default function name() {
  console.log("HELLO USER");
}

export function Othername() {
  console.log("HELLO OTHER USER");
}

export class NameClass {
  test() {
    console.warn("Name class test function");
  }
}

class OtherNameClass {
  test() {
    console.warn("Other Name class test function");
  }
}

export let UL = new OtherNameClass();

function aging(a) {
  if (a >= 18) {
    console.log("You are an adult");
  } else {
    console.log("You are a Miner");
  }
}

aging(17);

let i = 4;
do {
  console.log(i);
  i--;
} while (i >= 3);

let cars = ["Lamborgini", "BMW", "Viper", "Hellcat"];
let garage = 0;
let text = "The Car is ";

while (cars[garage]) {
  console.log(text + cars[garage]);
  garage++;
}

let num = 0,
  sum = 0;

// loop as long as num is 0 or positive
while (num >= 0) {
  // add all positive numbers
  sum += num;

  // take input from the user
  num = parseInt(prompt("Enter a number: "));
}

// last, display sum
console.log(`The sum is ${sum}`);

class Car {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }

  Carinfo() {
    console.log(`Car Name: ${this.name}`);
    console.log(`Model Year: ${this.year}`);
  }
}

let Car1 = new Car("Nissan GTR", 2018);

Car1.Carinfo();
