// Import stylesheets
import './style.css';

// Write Javascript code!
// const appDiv = document.getElementById('app');
// appDiv.innerHTML = `<h1>É nois que voa bruxao</h1>;
function getNumber(inputID) {
  const value = document.getElementById(inputID).value;
  return parseInt(value);
}
function getFunctionalFactorial(n) {
  console.log(n);
  if (n == 1) return 1;
  else return n * getFunctionalFactorial(n - 1);
}
function displaySum(value) {
  document.getElementById('func-sum-result').textContent = value;
}
document.getElementById('func-btn').onclick = function handler() {
  const res = getFunctionalFactorial(getNumber('input-n'));
  displaySum(res);
};
