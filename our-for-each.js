// marks.forEach(mark => {
//   console.log(`hello Markie ${mark}`);
// });

const forEach = (arr, cb) => {
  for (let i = 0; i < arr.length; i++) {
    // console.log(arr[i]);
    cb(arr[i], i);
  }
};

const fruits = ['apple', 'banana', 'kiwi', 'durian'];

forEach(fruits, (fruit, index) => {
  console.log(`I love ${fruit}s at index ${index}`);
});







//