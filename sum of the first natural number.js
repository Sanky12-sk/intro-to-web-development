// Step 1: Initialize variables
let sum = 0; // Variable to store the sum of natural numbers
let i = 1; // Counter variable starting from 1

// Step 2: Prompt the user to enter the value of N
const N = parseInt(prompt("Enter the value of N: "), 10);

// Step 3: Check if the entered value of N is a valid number
if (!isNaN(N) && N > 0) {
    // Step 4: Use a while loop to iterate from 1 to N
    while (i <= N) {
        sum += i; // Add the current value of i to the sum
        i++; // Increment the counter variable by 1
    }

    // Step 5: Print the calculated sum
    console.log("The sum of the first " + N + " natural numbers is: " + sum);
} else {
    console.log("Please enter a valid positive number for N.");
}