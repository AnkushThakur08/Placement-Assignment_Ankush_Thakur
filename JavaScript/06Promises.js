//TODO: Promise Example One: Only RESOLVE STATE
function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = true;

      if (success) {
        const data = { id: 1, name: 'Example' };
        resolve(data);
      } else {
        const error = new Error('Failed to fetch data.');

        reject(error);
      }
    }, 2000);
  });
}

fetchData()
  .then((data) => {
    console.log('Data:', data);
  })
  .catch((error) => {
    console.error('Error:', error);
  });

// TODO: EXAMPLE 2:
function generateRandomNumber() {
  return new Promise((resolve, reject) => {
    const randomNumber = Math.floor(Math.random() * 10) + 1;
    console.log(randomNumber);
    if (randomNumber <= 6) {
      resolve(randomNumber);
    } else {
      reject(new Error('Generated number is greater than 6'));
    }
  });
}

generateRandomNumber()
  .then((number) => {
    console.log('Generated number:', number);
  })
  .catch((error) => {
    console.error('Error:', error.message);
  });
