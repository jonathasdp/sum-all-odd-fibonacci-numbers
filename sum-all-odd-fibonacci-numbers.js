function sumFibs(num) {
  let fibonacci = [1, 1];
  while (fibonacci[fibonacci.length - 2] + fibonacci[fibonacci.length - 1] <= num) {
    fibonacci.push(fibonacci[fibonacci.length - 2] + fibonacci[fibonacci.length - 1]);
  }
  return fibonacci.reduce((agg, v) => v % 2 === 0 ? agg : agg + v);
}