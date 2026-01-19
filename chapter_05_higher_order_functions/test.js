let SCRIPTS = [
	{
		name: "Coptic",
		ranges: [
			[994, 1008],
			[11392, 11508],
			[11513, 11520],
		],
		direction: "rtl",
		year: -200,
		living: false,
		link: "https://en.wikipedia.org/wiki/Coptic_alphabet",
	},
	{
		name: "Coptic2",
		ranges: [
			[994, 1000],
			[11392, 11508],
			[11513, 11520],
		],
		direction: "rtl",
		year: -200,
		living: false,
		link: "https://en.wikipedia.org/wiki/Coptic_alphabet",
	},
	{
		name: "Coptic3",
		ranges: [
			[700, 1000],
			[11392, 11508],
			[11513, 11520],
		],
		direction: "rtl",
		year: -200,
		living: false,
		link: "https://en.wikipedia.org/wiki/Coptic_alphabet",
	},
];

function average(array) {
	return array.reduce((a, b) => a + b) / array.length;
}
////
// TypeError: Reduce of empty array with no initial value
console.log(
	Math.round(average(SCRIPTS.filter((s) => s.living).map((s) => s.year)))
);
// → 1165
console.log(
	Math.round(average(SCRIPTS.filter((s) => !s.living).map((s) => s.year)))
); // → 204
