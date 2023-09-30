// Q1: Evaluate JavaScript Expressions
document.getElementById("q1Output").textContent = `
1. ${-9 * 3}
2. "value is " + 50
3. ${17 % 5}
4. ${5 % 17}
5. ${5 / 10}
6. ${4 == 4}
7. ${4 != 5}
8. ${7 <= 8}
9. (Math.ceil(x) - Math.floor(x)) // Replace 'x' with an actual number
`;

// Q2: Read and Display a Number
function readAndDisplayNumber() {
    const num = prompt("Enter a number:");
    document.getElementById("q2Output").textContent = `You entered: ${num}`;
}

// Q3: Display Two Numbers in Ascending Order
function displayAscendingOrder() {
    const num1 = prompt("Enter the first number:");
    const num2 = prompt("Enter the second number:");
    const sortedNumbers = [num1, num2].sort((a, b) => a - b);
    document.getElementById("q3Output").textContent = `Ascending Order: ${sortedNumbers.join(", ")}`;
}

// Q4: Display the Larger of Two Numbers
function displayLargerNumber() {
    const num1 = prompt("Enter the first number:");
    const num2 = prompt("Enter the second number:");
    const largerNumber = Math.max(num1, num2);
    document.getElementById("q4Output").textContent = `Larger Number: ${largerNumber}`;
}

// Q5: Display the Sum of Two Numbers
function displaySumOfNumbers() {
    const num1 = prompt("Enter the first number:");
    const num2 = prompt("Enter the second number:");
    const sum = parseFloat(num1) + parseFloat(num2);
    document.getElementById("q5Output").textContent = `Sum: ${sum}`;
}

// Q6: Print Number as Text
function printNumberAsText() {
    const num = prompt("Enter a number (1-9):");
    switch (parseInt(num)) {
        case 1:
            document.getElementById("q6Output").textContent = "ONE";
            break;
        case 2:
            document.getElementById("q6Output").textContent = "TWO";
            break;
        case 3:
            document.getElementById("q6Output").textContent = "THREE";
            break;
        case 4:
            document.getElementById("q6Output").textContent = "FOUR";
            break;
        case 5:
            document.getElementById("q6Output").textContent = "FIVE";
            break;
        case 6:
            document.getElementById("q6Output").textContent = "SIX";
            break;
        case 7:
            document.getElementById("q6Output").textContent = "SEVEN";
            break;
        case 8:
            document.getElementById("q6Output").textContent = "EIGHT";
            break;
        case 9:
            document.getElementById("q6Output").textContent = "NINE";
            break;
        default:
            document.getElementById("q6Output").textContent = "PLEASE TRY AGAIN";
            break;
    }
}