const counter = document.getElementById('counter');
const btn = document.getElementById('btn');

let count = 0;

btn.addEventListener('click', () => {
  count += 1;
  counter.innerHTML = count;
});
