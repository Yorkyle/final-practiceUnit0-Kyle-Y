/*

Directions:

The code in your repo should:
Include commented pseudocode to break down the logic for what you are trying to accomplish in each example.

Use console logs to test your outputs and ensure your code works as expected.

Follow all of the syntax rules and conventions you have learned about in Unit 0.

Include comments to identify where the skill from each module is represented in the code.

You’ll have comments to explain 6 total skills. One from each of the following modules:

Values, Data Types, and Operations
Stringing Characters Together
Control Structures and Logic
Working with Loops
Building Arrays
Using Arrays
*/

// Values, Data Types, and Operations
let userProfile = [
    "Louise",                 // [0] name
    30,                       // [1] age
    "female",                 // [2] sex
    177,                      // [3] heightCm
    77,                       // [4] weightKg
    "sedentary",              // [5] activityLevel
    ["nuts", "shellfish"],    // [6] foodAllergies
    ["thyroid"],              // [7] medications
    null,                     // [8] isPregnant
    true,                     // [9] hasAnemia
    false                     // [10] hasKidneyDisease
];

console.log(userProfile);

// Stringing Characters Together

let foodItem = {
    name: "Pizza",
    emoji: "\u{1F355}", // Unicode for pizza
    description: "\"A good source of protein, pizzas are customizable and unique like you, so choose add the toppings you like and that support your health!\""
}

console.log(`${foodItem.emoji} ${foodItem.name}: ${foodItem.description}`);

// Control Structures and Logic

// Check for missing pregnancy status

if (userProfile[8] === null) {
    console.log("User Profile incomplete. Please answer all outstanding questions."); // Use null as a placeholder so that, if query is unanswered, a message is displayed asking user to return to profile and answer this skipped question
}

// Working with Loops

// Example fruit list with vitamin A content in milligrams
let fruits = ["Mango ", "Cantaloupe ", "Apple ", "Orange "];
let vitaminA = [54, 23, 0.5, 4]; // matching indices

let minVitaminA = 5; // mg criterion

console.log(`Fruits with at least ${minVitaminA} mg of vitamin A per serving:\n`);

for (let i = 0; i < fruits.length; i++) {
    if (vitaminA[i] >= minVitaminA) {
        console.log(fruits[i] + vitaminA[i] + " mg");
    }
}

// Building Arrays

let vitaminCFruits = ["Apple", "Orange", "Kiwi", "Strawberry"]; //,make an array of foods high in vitamin C
let vitaminC = [8, 70, 64, 89]; // mg per serving
let maxServings = [4, 2, 2, 2]; // realistic "max" servings
let dailyGoal = 90;             // daily value for vitamin C

// Using Arrays

vitaminCFruits.push("Papaya");  // add papaya to the array
vitaminC.push(95);              // add its vitamin C content
maxServings.push(1);            // add its max serving info

let validFruits = vitaminCFruits.filter((fruit, index) =>
    vitaminC[index] * maxServings[index] >= dailyGoal
);
//use the .filter() method to verify that only fruits high in vitamin C and realistically eaten splayed to the user (take out the apple) 

console.log("Fruits that can easily meet the vitamin C daily value:");
validFruits.forEach(fruit => console.log(fruit));