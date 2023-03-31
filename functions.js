// Defining Our Own Functions
// For each exercise below, write the function according to the requirements. 
// Call each method at least twice and store the return value in a variable. 
// Use console.log() to see the return value in the console.

// 1: Write a function named greeting that returns a string with a general greeting. 

function greeting() {
    return `Hello, how are you!?`
}
console.log(greeting());

// 2: Write a function named customGreeting that returns a greeting WITH a specific name.

function customGreeting(name) {
    return `Hello, how are you ${name}!?`
}
console.log(customGreeting("Triston"));
// 3: Write a function named greetPerson that takes in 3 strings, a first, middle, and last name, and returns a sentence with the full name.

function greetPerson(firstName, middleName, lastName) {
    return `I hope that you have been well ${firstName} ${middleName} ${lastName}!`
}
console.log(greetPerson("Triston", "Paul", "Modlin-Filippi"));

// 4: Write a function named square that takes in one number, and returns the square of that number.
// BONUS: Print a sentence that interpolates the return value of your square function.

function square(num) {
    var product = num * num
    var sentence = `The square of 6 is represented by 6 raised to the power of 2; 6 multiplied by 6 is ${product}!`
    return product, sentence
}
console.log(square(6));

// 5: Write a function named checkStock that satisfies the following interaction pattern:
// Hint: You will only write one checkStock function that checks the quantity and then prints the corresponding statement.

function checkStock(productInven1, productInven2, productInven3, productInven4) {
    var coffee = productInven1;
    var tortillas = productInven2;
    var cheese = productInven3
    var salsa = productInven4
           if (coffee >= 4) {
            console.log("Coffee is stocked");
           } else {
            console.log("Coffee - OUT of stock");
           } if (tortillas < 3) {
             console.log("Tortillas - running LOW");
           } else {
             console.log("Tortillas are stocked");
           } if (cheese < 3) {
             console.log("Cheese - OUT of stock");
           } else {
             console.log("Cheese is in stock");
           } if (salsa <= 1) {
             console.log("Salsa - running LOW");
           } else {
             console.log("Salsa is in stock");
           }
    return coffee, tortillas, cheese, salsa
    }
     console.log(checkStock(4, 3, 0, 1));

// checkStock(4, "Coffee");
// // => "Coffee is stocked"

// checkStock(3, "Tortillas");
// // => "Tortillas - running LOW"

// checkStock(0, "Cheese");
// // => "Cheese - OUT of stock!"

// checkStock(1, "Salsa");
// // => "Salsa - running LOW"