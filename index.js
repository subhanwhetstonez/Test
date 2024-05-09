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
