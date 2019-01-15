'use strict';

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
