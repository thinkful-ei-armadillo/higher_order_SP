'use strict';
//drill 1
const repeat = (fn, n) => {
  for (let i = 0; i < n; i++) {
    fn();
  }
};

const hello = () => {
  console.log('Hello World');
};

const goodbye = () => {
  console.log('Goodbye World');
};

repeat(hello, 5);
repeat(goodbye, 5);

//drill 2
function filter(arr, fn) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i]) === true) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

// DO NOT EDIT BETWEEN THESE LINES, BUT DO READ THE CODE ----->
// First we setup an array of strings we plan to filter:
const myNames = ['Rich', 'Joe', 'Bhaumik', 'Ray'];

// We use your `filter` function here, capturing a new array into `filteredNames`
// comprised of names that only begin with 'R'
console.log(filter(myNames, name => name[0] === 'R'));

const filteredNames = filter(myNames, function(name) {
  // This is known as a "predicate function" - it's a function that
  // only returns a boolean
  return name[0] === 'R';
});

console.log(filteredNames); // => ['Rich', 'Ray']
// <---- DO NOT EDIT BETWEEN THESE LINES

//drill 3
const hazardWarningCreator = typeOfWarning => {
  let warningCounter = 0;
  return location => {
    warningCounter++;

    console.log(`DANGER! There is a ${typeOfWarning} hazard at ${location}!`);
    console.log(
      `The ${typeOfWarning} hazard alert has triggered ${warningCounter} ${
        warningCounter === 1 ? 'time' : 'times'
      } today!`
    );
  };
};

const rockWarning = hazardWarningCreator('Rocks on the Road');
const planeWarning = hazardWarningCreator('Planes in the Sky');
const lizardWarning = hazardWarningCreator('Lizzies in the Fields');

rockWarning('Main Street');
planeWarning('Main Street');
lizardWarning('Main Street');

rockWarning('Georgia Ave');
planeWarning('Georgia Ave');
lizardWarning('Georgia Ave');

rockWarning('42nd Street');
planeWarning('42nd Street');
lizardWarning('42nd Street');

//drill 4
const originalArr = [[0, 0], [0, 5], [-1, -3], [-3, 1], [2, -4], [3, 2]];

let filteredArr = originalArr.filter(element => {
  return element[0] >= 0 && element[1] >= 0;
});

let mappedArr = filteredArr.map(element => {
  return element[0] + element[1];
});

let totalSteps = 0;

mappedArr.forEach(element => {
  totalSteps += element;
});
console.log(`The turtle took ${totalSteps} steps.`);

//drill 5

const reduceWords = input => {
  const inputArr = input.split(' ');
  return inputArr.reduce((total, element) => {
    return (
      total +
      (element.length === 3 ? ' ' : element[element.length - 1].toUpperCase())
    );
  }, '');
};

const words =
  'noggin oreo the moon time tele steed his tent apollo her lives though shoo tofu budapest';
console.log(reduceWords(words));
