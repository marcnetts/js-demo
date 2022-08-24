// Import stylesheets
import './style.css';

//Funcional
function getNumber(inputID) {
  const value = document.getElementById(inputID).value;
  return parseInt(value);
}
function getFunctionalFactorial(n) {
  console.log(n);
  if (n < 0) return 'Por favor não use um numero negativo'; //chora typescript
  if (n <= 1) return 1;
  else return n * getFunctionalFactorial(n - 1);
}
function displaySum(value) {
  document.getElementById('func-sum-result').textContent = value;
}
document.getElementById('func-btn').onclick = function handler() {
  const res = getFunctionalFactorial(getNumber('input-n'));
  displaySum(res);
};

//Procedural
document.getElementById('oo-btn').onclick = function handle() {
  const value = document.getElementById('input-n').value;
  let n = parseInt(value);
  let res = 1;
  for (let i = 1; i <= n; i++) {
    res = res * i;
  }
  document.getElementById('oo-sum-result').textContent = res;
};
