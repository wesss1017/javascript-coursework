// Primitive Data Types

const age = 18; // Number
const fullName = "Wesley Lane"; // String
const isEnrolled = true; // Boolean

let futureGoal; // Undefined (declared but not assigned)
const completedCourse = null; // Null (intentional absence of value)

// Logging values and types
console.log(`Age: ${age}, Type: ${typeof age}`);
console.log(`Name: ${fullName}, Type: ${typeof fullName}`);
console.log(`Enrolled: ${isEnrolled}, Type: ${typeof isEnrolled}`);
console.log(`Future Goal: ${futureGoal}, Type: ${typeof futureGoal}`);
console.log(`Completed Course: ${completedCourse}, Type: ${typeof completedCourse}`);

/*
Null vs Undefined:
Undefined means a variable has been declared but not given a value yet.
Null is an intentional assignment that represents "no value" on purpose.
Developers use null when they want to explicitly clear or reset a value.
*/
// Type Conversions

const ageAsString = String(age);
console.log(`Original: ${age} (${typeof age}) → Converted: ${ageAsString} (${typeof ageAsString})`);

const nameAsBoolean = Boolean(fullName);
console.log(`Original: ${fullName} (${typeof fullName}) → Converted: ${nameAsBoolean} (${typeof nameAsBoolean})`);

const enrolledAsNumber = Number(isEnrolled);
console.log(`Original: ${isEnrolled} (${typeof isEnrolled}) → Converted: ${enrolledAsNumber} (${typeof enrolledAsNumber})`);

const nullAsNumber = Number(completedCourse);
console.log(`Original: ${completedCourse} (${typeof completedCourse}) → Converted: ${nullAsNumber} (${typeof nullAsNumber})`);

/*
Null to Number Conversion:
Null converts to 0 because JavaScript treats it as the absence of a numeric value.
This can be dangerous because it may silently affect calculations without errors.
*/
// Arithmetic Operations

const x = 10;
const y = 3;

console.log(`Addition: ${x + y}`);
console.log(`Subtraction: ${x - y}`);
console.log(`Multiplication: ${x * y}`);
console.log(`Division: ${x / y}`);
console.log(`Modulus: ${x % y}`);

console.log(`Division by zero: ${x / 0}`);

/*
Dividing by zero in JavaScript returns Infinity.
JavaScript does not throw an error, which can hide bugs in calculations.
*/

// Logical Operations

const hasCompletedAssignment = false;

console.log(`isEnrolled AND hasCompletedAssignment = ${isEnrolled && hasCompletedAssignment}`);
console.log(`isEnrolled OR hasCompletedAssignment = ${isEnrolled || hasCompletedAssignment}`);
console.log(`NOT isEnrolled = ${!isEnrolled}`);

/*
Truth Table:

| A     | B     | A && B | A || B |
| true  | true  | true   | true   |
| true  | false | false  | true   |
| false | true  | false  | true   |
| false | false | false  | false  |
*/
