// Closure Practice

// Write a function called makeCounter that returns an object with two methods: increment() and get().

// Each call to makeCounter should create a new, independent counter. The increment() method should increase the counter by 1 and return the new value. The get() method should return the current value.

function makeCounter() {
	let value = 0;
	return {
		increment: function () {
			return (value += 1);
		},
		get: function () {
			return value;
		},
	};
}

const counter1 = makeCounter();
const counter2 = makeCounter();

console.log(counter1.increment());
console.log(counter1.increment());
console.log(counter1.get());
console.log(counter2.get());

// note    return  value++  will return value and after that is plus it with 1
// but the return value+=1 will exactly return that value+1
