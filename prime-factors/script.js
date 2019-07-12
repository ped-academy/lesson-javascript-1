function getPrimeFactors(input) {
  const output = [];

  for (let p = 2; p <= input; p += 1) {
    while (input % p === 0) {
      input /= p;
      output.push(p);
    }
  }

  return output;
}

console.log("Usage: > getPrimeFactors(60)");
getPrimeFactors(60);
