const incrementBtn = document.getElementById('increment');
const decrementBtn = document.getElementById('decrement');
const countEl = document.getElementById('count');

// define the initial count
let count = 0;

// add event listeners to the buttons to update the count
incrementBtn.addEventListener('click', () => {
    count++;
    countEl.innerHTML = count;
});
decrementBtn.addEventListener('click', () => {
    count--;
    countEl.innerHTML = count;
});