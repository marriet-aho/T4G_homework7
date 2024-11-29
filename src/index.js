let name = prompt("what is your name?");
let age = prompt("how old are you?");
let email = prompt("write your email?");


if (age < 12) {
    alert(`Hi ${name}, you are ${age} years old and you are too young to register. Sorry 😔😔`);
} else if ( 12  > age < 18) {
    alert(`Hi ${name}, you are ${age} years old and you have limited options to register for. We will keep in touch via your email: ${email} 👋🏾👋🏾.`);
} else if (age > 18) {
    alert(`Hi ${name}, you are ${age} years old and you can register for any option of your choosing. We will keep in touch via your email: ${email} 👋🏾`);
} else {
    alert("Please enter a valid age.");
}


// Function to prompt the user for their details and display appropriate alerts
// function registerUser() {
//     // Prompt for user input
//     const name = prompt("Enter your name:");
//     const age = parseInt(prompt("Enter your age:"));
//     const email = prompt("Enter your email:");

//     // Check if the inputs are valid
//     if (!name || isNaN(age) || !email) {
//         alert("Please provide valid inputs for name, age, and email.");
//         return;
//     }
// }


