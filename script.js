
// Q1: Evaluate JavaScript Expressions
var q1Output = [
    -9 * 3,
    "value is " + 50,
    17 % 5,
    5 % 17,
    5 / 10,
    4 == 4,
    4 != 5,
    7 <= 8,
    Math.ceil(3.5) - Math.floor(3.5)
];

document.getElementById('q1Output').textContent = JSON.stringify(q1Output);

// Q2: Read a number (using prompt) and display it using alert
function readAndDisplayNumber() {
    var number = prompt("Enter a number:");
    alert("You entered: " + number);
    document.getElementById('q2Output').textContent = "You entered: " + number;
}

// Q3: Read in two numbers and display them in ascending order.
function displayAscendingOrder() {
    var num1 = parseFloat(prompt("Enter the first number:"));
    var num2 = parseFloat(prompt("Enter the second number:"));

    if (!isNaN(num1) && !isNaN(num2)) {
        var result = [num1, num2].sort(function (a, b) {
            return a - b;
        });

        alert("Ascending order: " + result[0] + ", " + result[1]);
        document.getElementById('q3Output').textContent = "Ascending order: " + result[0] + ", " + result[1];
    } else {
        alert("Please enter valid numbers.");
        document.getElementById('q3Output').textContent = "Please enter valid numbers.";
    }
}

// Q4: Read in two numbers and display the larger
function displayLargerNumber() {
    var num1 = parseFloat(prompt("Enter the first number:"));
    var num2 = parseFloat(prompt("Enter the second number:"));

    if (!isNaN(num1) && !isNaN(num2)) {
        var largerNumber = num1 > num2 ? num1 : num2;
        alert("The larger number is: " + largerNumber);
        document.getElementById('q4Output').textContent = "The larger number is: " + largerNumber;
    } else {
        alert("Please enter valid numbers.");
        document.getElementById('q4Output').textContent = "Please enter valid numbers.";
    }
}

// Q5: Read two numbers and display their sum. What problem did you encounter?
function displaySumOfNumbers() {
    var num1 = parseFloat(prompt("Enter the first number:"));
    var num2 = parseFloat(prompt("Enter the second number:"));

    if (!isNaN(num1) && !isNaN(num2)) {
        var sum = num1 + num2;
        alert("The sum is: " + sum);
        document.getElementById('q5Output').textContent = "The sum is: " + sum;
    } else {
        alert("Please enter valid numbers.");
        document.getElementById('q5Output').textContent = "Please enter valid numbers.";
    }
}

// Q6: If you have a “num” variable, print its text representation.
function printNumberAsText() {
    var num = parseInt(prompt("Enter a number between 1 and 9:"));
    var text = "";

    switch (num) {
        case 1:
            text = "ONE";
            break;
        case 2:
            text = "TWO";
            break;
        case 3:
            text = "THREE";
            break;
        case 4:
            text = "FOUR";
            break;
        case 5:
            text = "FIVE";
            break;
        case 6:
            text = "SIX";
            break;
        case 7:
            text = "SEVEN";
            break;
        case 8:
            text = "EIGHT";
            break;
        case 9:
            text = "NINE";
            break;
        default:
            text = "PLEASE TRY AGAIN";
    }

    alert(text);
    document.getElementById('q6Output').textContent = text;
}

// Q7: Use a loop to display the numbers 0 through 5, each in a separate alert window.
function displayNumbersInSeparateAlerts() {
    for (var i = 0; i <= 5; i++) {
        alert(i);
    }
}

// Q8: Use a loop to display the numbers 0 through 5 in a single alert window.
function displayNumbersInSingleAlert() {
    var numbers = "";
    for (var i = 0; i <= 5; i++) {
        numbers += i + " ";
    }
    alert(numbers);
}

// Q9: Use a loop to display the numbers in the range 0…20 that are multiples of 3.
function displayMultiplesOf3() {
    var multiples = "";
    for (var i = 0; i <= 20; i++) {
        if (i % 3 === 0) {
            multiples += i + " ";
        }
    }
    alert(multiples);
    document.getElementById('q9Output').textContent = multiples;
}

// Q10: Prompt the user for a number in the range 0…100. If the number is out of range, display an error message and prompt again until a valid number is entered.
function promptForValidNumberInRange() {
    var number;
    do {
        number = parseInt(prompt("Enter a number between 0 and 100:"));
    } while (isNaN(number) || number < 0 || number > 100);

    alert("You entered a valid number: " + number);
}

// Q11: Repeat previous exercise, but allow for the possibility that the user enters something that is not a number.
function promptAndHandleNonNumericInput() {
    var number;
    do {
        var input = prompt("Enter a number between 0 and 100:");
        number = parseInt(input);
    } while (isNaN(number) || number < 0 || number > 100);

    alert("You entered a valid number: " + number);
}

// Q12: Prompt for an integer, then display the sum of the integers from 0 through the number entered.
function displaySumOfIntegers() {
    var num = parseInt(prompt("Enter an integer:"));
    var sum = 0;
    for (var i = 0; i <= num; i++) {
        sum += i;
    }
    alert("The sum of integers from 0 to " + num + " is: " + sum);
}

// Q13: Prompt for an integer, then display the average of the integers from 0 through the number entered.
function displayAverageOfIntegers() {
    var num = parseInt(prompt("Enter an integer:"));
    var sum = 0;
    for (var i = 0; i <= num; i++) {
        sum += i;
    }
    var average = sum / (num + 1);
    alert("The average of integers from 0 to " + num + " is: " + average);
}


