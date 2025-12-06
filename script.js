const btn = document.querySelector('.btn');
const x = document.querySelector('.num1');
const y = document.querySelector('.num2');
const r = document.querySelector('.result');

btn.onclick = function() {
  // Convert input values to numbers and add them
  const sum = Number(x.value) + Number(y.value);
  r.textContent = sum;
};
