// getting the html elements
const decrementBtn = document.getElementById("decrementBtn");
const incrementBtn = document.getElementById("incrementBtn");
const resetBtn = document.getElementById("resetBtn");
const displayValue = document.getElementById("displayValue");

// for decrement button click
decrementBtn.addEventListener("click", () => {
    const value = Number(displayValue.innerText);
    if (value > 0) {
        displayValue.innerText = value - 1;
    } else {
        alert("Negitive Values not allowed");
    }
});

// for increment button click
incrementBtn.addEventListener("click", () => {
    const value = Number(displayValue.innerText);
    if (value >= 100) {
        alert("value over 100 are not allowed");
    } else {
        displayValue.innerText = value + 1;

    }
});

// for reset button clicks
resetBtn.addEventListener("click", () => {
    displayValue.innerText = 0;
})