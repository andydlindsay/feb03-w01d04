// function sayHello() {
//   console.log('hello there');
// }

const sayHello = function() {
  console.log('hello there');
};

const bool = true;
const otherBool = bool;

const otherFn = sayHello;
const yetAnotherFn = otherFn
yetAnotherFn();
