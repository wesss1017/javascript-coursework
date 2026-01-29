// ===============================
// Part 1: Primitive Data Types
// ===============================

const age = 19; // Number
const fullName = "Wesley Lane"; // String
const isEnrolled = true; // Boolean

let futureGoal; // Undefined (declared but not assigned)
const completedCourse = null; // Null (intentional absence of value)

// Log values and their types
console.log(`Age: ${age}, Type: ${typeof age}`);
console.log(`Name: ${fullName}, Type: ${typeof fullName}`);
console.log(`Enrolled: ${isEnrolled}, Type: ${typeof isEnrolled}`);
console.log(`Future Goal: ${futureGoal}, Type: ${typeof futureGoal}`);
console.log(`Completed Course: ${completedCourse}, Type: ${typeof completedCourse}`);

/*
Null vs Undefined:
Undefined means a variable exists but has not been assigned a value.
Null is an intentional assignment that represents no value.
Use null when you want to explicitly clear or reset a variable.
*/

// ===============================
// Part 2: Type Conversion
// ===============================

const ageAsString = String(age);
console.log(
  `Original: ${age} (${typeof age}) → Converted: ${ageAsString} (${typeof ageAsString})`
);

const nameAsBoolean = Boolean(fullName);
console.log(
  `Original: ${fullName} (${typeof fullName}) → Converted: ${nameAsBoolean} (${typeof nameAsBoolean})`
);

const enrolledAsNumber = Number(isEnrolled);
console.log(
  `Original: ${isEnrolled} (${typeof isEnrolled}) → Converted: ${enrolledAsNumber} (${typeof enrolledAsNumber})`
);

const nullAsNumber = Number(completedCourse);
console.log(
  `Original: ${completedCourse} (${typeof completedCourse}) → Converted: ${nullAsNumber} (${typeof nullAsNumber})`
);

/*
Null Conversion Explanation:
When null is converted to a number, JavaScript returns 0.
This happens because null represents the absence of a numeric value.
This can be dangerous because it may affect calculations without throwing an error.
*/

// ===============================
// Part 3: Arithmetic Operations
// ===============================

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
JavaScript does not throw an error, which can hide bugs if not handled properly.
*/

// ===============================
// Part 3.2: Logical Operations
// ===============================

const hasCompletedAssignment = false;

console.log(
  `isEnrolled AND hasCompletedAssignment = ${isEnrolled && hasCompletedAssignment}`
);
console.log(
  `isEnrolled OR hasCompletedAssignment = ${isEnrolled || hasCompletedAssignment}`
);
console.log(`NOT isEnrolled = ${!isEnrolled}`);

/*
Truth Table:

| A     | B     | A && B | A || B |
| true  | true  | true   | true   |
| true  | false | false  | true   |
| false | true  | false  | true   |
| false | false | false  | false  |
*/



