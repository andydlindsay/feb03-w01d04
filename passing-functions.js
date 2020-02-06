const sayHello = function(name) {
  console.log(`hello there ${name}`); // whatever we pass in
};

sayHello('Andy');

const functionRunner = function(fn) {
  // console.log('inside functionRunner', fn);
  fn('Alice'); // console.log('Alice');
};

// for..in
// for..of
arr.forEach(function() {});
arr.map(function() {});
arr.filter(function() {});


functionRunner(sayHello);
functionRunner(console.log);


// console.log(sayHello.toString());

// const anotherFn = function(func) {

// };
