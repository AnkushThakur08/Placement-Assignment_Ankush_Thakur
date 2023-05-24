const input = document.getElementById('input');
const output = document.getElementById('output');

const debounce = (func, delay) => {
  let timeoutId;

  return function (...args) {
    clearTimeout(timeoutId);

    timeoutId = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
};

const handleInput = () => {
  output.innerText = input.value;
  console.log('Input value:', input.value);
};

const debouncedHandler = debounce(handleInput, 1000);
input.addEventListener('input', debouncedHandler);
