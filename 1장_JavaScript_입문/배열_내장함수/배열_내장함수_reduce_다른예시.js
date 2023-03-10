const alphabet = ['a', 'a', 'a', 'b', 'c', 'c', 'd', 'e'];

const counts = alphabet.reduce((acc, current) => {
  if (acc[current]) {
      acc[current] += 1;
  } else {
      acc[current] = 1;
  }
  return acc;
}, {});

console.log(counts);