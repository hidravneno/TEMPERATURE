//challenge 1
function doubleNumber(num) {
  return num * 2;
}

console.log(doubleNumber(4)); // Output: 8
console.log(doubleNumber(10)); // Output: 20

//chalenge2

function combineNames(firstName = "Unknown", lastName = "Unknown") {
  return `${firstName} ${lastName}`;
}

console.log(combineNames("Alice", "Johnson")); // Output: Alice Johnson
console.log(combineNames("Alice")); // Output: Alice Unknown
console.log(combineNames()); // Output: Unknown Unknown

//challenge 3
function convertToSeconds(minutes) {
  return minutes * 60;
}

console.log(convertToSeconds(5)); // Output: 300
console.log(convertToSeconds(10)); // Output: 600
