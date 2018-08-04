var cw = 5;
// const factorial = (cw) => {
export function factorial(cw, n) {
  if (cw === 1) {
    return 1;
  } else {
    return cw * factorial(cw - 1);
  }
}
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

getRandomInt(2, 20);
console.log(factorial(5));
