// Object(value) is mainly useful when you specifically
//  want to convert a value to an object, but that’s uncommon:

const num = 43;
const numObj = Object(num); // Creates an object wrapper for the number

console.log(numObj);
console.log(typeof numObj); // "object"

// Object.create(null) is often used
// when you want a “plain dictionary” object without the inherited Object.prototype stuff
// there is no toString, hasOwnProperty, etc. inherited
// it avoids accidental key collisions like:

const item = Object.create(null);

item.name = "book";

console.log(item.name); // "book"
console.log(typeof item); // "object"
console.log(Object.getPrototypeOf(item)); // null

//
const counts1 = {};

console.log("toString" in counts1); // true

//
const counts = Object.create(null);

console.log("toString" in counts); // false

counts.toString = 1;
console.log(counts.toString); // 1
console.log("toString" in counts); // true
