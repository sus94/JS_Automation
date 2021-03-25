// 1.	Write a function called inOrder that accepts two callbacks and invokes them in order

function logOne() {
  setTimeout(function () {
    console.log('one!');
  }, Math.random() * 1000);
}

function logTwo() {
  setTimeout(function () {
    console.log('two!');
  }, Math.random() * 1000);
}



function inOrder(cb1, cb2) {
  setTimeout(function () {
    cb2();
  }, 1000);
  cb1();
}

inOrder(logOne, logTwo);
