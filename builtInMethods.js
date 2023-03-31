// SECTION 1: Calling methods on string or integer objects.
// Run each line of code below (either from this file or in dev tools).
// Then, in a comment, write 1-2 sentences describing what is happening, using ALL the involved vocabulary terms you've learned in this lesson so far.

// EXAMPLE
// `console.log` was added to the beginning of each statement in order for them to be printed in the console.
// The toLowerCase() method is called on the string "Hello World"
// No arguments are passed; toLowerCase() has one clear job which is to lowercase all letters that exist in the String
// The return value is "hello world"
"Hello World".toLowerCase();

// The .includes() method is called on the string "Hello World"
// No arguments are passed; the return value of .includes() is `true`                          
"Hello World".includes("Hello");

// The .endsWith() method is called on the string "Hello World"
// No arguements are passed; the return value of .endsWith() is `false`
// This is because the string does not end with "Hello" 
"Hello World".endsWith("Hello");

// The .endsWith() method is called on the string "Hello World"
// No arguements are passed; the return value of .endsWith() is true 
// This is because the string does end with "rld"
"Hello World".endsWith("rld");



// SECTION 2: Calling methods on variables assigned to strings.
// Declare 2 variables assigned to strings.
// Call a different built-in JavaScript method on each of your variables. 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
// Include comments above each method call explaining the impact and return value of that method.

// EXAMPLE
// The startsWith() method is called on the firstName variable, which stores the string object "Jeff". 
// The startsWith() method returns true if the data in the firstName variable starts with the argument passed in.
// In this example, the return value is true, because "Jeff" does start with "J".
// The console.log() statements prints the return value of the startsWith() method (true) to the console.
var firstName = "Jeff";
console.log(firstName.startsWith("J"));

// The endsWith() method is called on the lastName string variable; this stores the string object "Filippi"
// The endsWith() method returns to true or false depending on the data in the lastName variable
// The return value is true because "Filippi" endsWith() "ppi"
var lastName = "Filippi";
console.log(lastName.endsWith("ppi"));

// The .length() method calls on the variable string 
// The return value for this example is 17
// This is because, 17, is how many characters are within the string including spaces
var string = "Repitition is key";
console.log(string.length);

// SECTION 3: Calling methods on variables assigned to arrays.
// Declare 2 variables assigned to arrays.
// Call a different built-in JavaScript method on each of your variables. 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
// Include comments above each method call explaining the impact and return value of that method.

// The pop() method calls on the variable numbers assigned to an array of random numbers
// This method removes the last element of the array
// The return value is `[13, 14, 42]`
// The push() method calls on the variable numbers assigned to an array of random numbers
// This method adds any number of elements after the last element in the array
// The return value for push() alone is [13, 14, 42, 23, 69]
// The return value for both methods ran at the same time is [13, 14, 42, 69]
// The pop() method has to run before the push() method if we want to replace the last element other wise we would be getting rid of the element we pushed first
var numbers = [13, 14, 42, 23]

var newLength = numbers.pop();
var lastElement = numbers.push(69);

console.log(numbers);

// The shift() method calls on the variable cars assigned to an array of car manufacturers
// This method removes the first element of an array
// The return value is ["Honda", "Ford", "Chevrolet", "Jeep"]
// The unshift() method calls on the variable cars assigned to an array of car manufacturers
// This method adds an element to the very beginnin of an array
// The return value for unshift() alone is ['Corvette', 'Toyota', 'Honda', 'Ford', 'Chevrolet', 'Jeep']
// If we want to replace the first element with a new element the shift() method must be ran before the unshift() method
// This is because we have to remove an element before we add a new element to the beginning of an array
var cars = ["Toyota", "Honda", "Ford", "Chevrolet", "Jeep"]

var firstElement = cars.shift();
var firstElement2 = cars.unshift("Corvette");

console.log(cars);