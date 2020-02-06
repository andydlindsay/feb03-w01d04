const marks = ['Zuckerberg', 'Wahlburg','Twain', 'Work Wearhouse'];

for (const mark of marks) {}
// for (const index in marks) {}

// const sayHiToMark = function(mark) {
//   console.log(`hello Markie ${mark}`);
// }

// marks.forEach(sayHiToMark);
marks.forEach(mark => {
  console.log(`hello Markie ${mark}`);
});
