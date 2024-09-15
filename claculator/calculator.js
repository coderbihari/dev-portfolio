// Append value to the display
function appendValue(value) {
    const display = document.getElementById("display");
    display.value += value;
}

// Display clear
function clearDisplay() {
    document.getElementById("display").value = "";
}

// Delete last character
function deleteLast() {
    const display = document.getElementById("display");
    display.value = display.value.slice(0, -1);
}

// Calculation
function calculate() {
    const display = document.getElementById("display");
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = "Error";
    }
}
