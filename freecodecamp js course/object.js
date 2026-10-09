const num = undefined;
const numObj = Object(num); // Creates an object wrapper for the number

console.log(numObj);
console.log(typeof numObj); // "object"
