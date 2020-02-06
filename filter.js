const nums = [5, 17, 2, 28, 67];

const filter = (arr, cb) => {
  const returnArr = [];
  for (const element of arr) {
    if (cb(element)) {
      returnArr.push(element);
    }
  }
  return returnArr;
};

const newArr = filter(nums, (num) => {
  // return num > 20;
  return num % 2 !== 0;
});

console.log(nums);
console.log(newArr);
