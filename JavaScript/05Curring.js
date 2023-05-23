function outer() {
  var a = 10;
  function inner() {
    console.log(a);
  }
  return inner;
}
outer()();

const curry = (f) => {
  // curry(f) does the currying transform
  return function (a) {
    return function (b) {
      return f(a, b);
    };
  };
};

// usage
function sum(a, b) {
  return a + b;
}

let curriedSum = curry(sum);

console.log(curriedSum(1)(2)); // 3
