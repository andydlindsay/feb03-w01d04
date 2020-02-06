const sayHello = (name) => {
  console.log(name);
};

sayHello.bool = true;
console.log(typeof sayHello)

for (const key in sayHello) {
  console.log(key, sayHello[key]);
}
