let manifest2 = { containerId: -88, destination: "Soledad", weight: NaN };
let manifest = {
	containerId: 1,
	destination: "Monterey, California, USA",
	weight: 831,
	unit: "lb",
	hazmat: false,
};
let manifest3 = {
	containerId: "Invalid",
	weight: "Invalid",
	unit: "Missing",
	hazmat: "Missing",
};
let manifest4 = { destination: "Watsonville", hazmat: true };
let manifest5 = { containerId: -2 };

// console.log(validateManifest(manifest2));
processManifest(manifest4);

function normalizeUnits(manifest) {
	let outputObject = {};
	outputObject.containerId = manifest.containerId;
	outputObject.destination = manifest.destination;
	outputObject.hazmat = manifest.hazmat;

	manifest.unit == "lb"
		? (outputObject.weight = manifest.weight * 0.45)
		: (outputObject.weight = manifest.weight);

	manifest.unit == "lb"
		? (outputObject.unit = "kg")
		: (outputObject.unit = manifest.unit);
	return outputObject;
}

function validateManifest(manifest) {
	let keys = ["containerId", "destination", "weight", "unit", "hazmat"];
	let inputManifestKeys = Object.keys(manifest);
	let outputObject = {};
	let returnEmptyObject = true;
	for (let key of keys) {
		if (!inputManifestKeys.includes(key)) {
			outputObject[key] = "Missing";
			returnEmptyObject = false;
		} else if (manifest[key] == null) {
			outputObject[key] = "Invalid";
			returnEmptyObject = false;
			// return outputObject;
		}
	}
	if (inputManifestKeys.length == 0) {
		return outputObject;
	}
	// prettier-ignore
	if (
		manifest.hasOwnProperty("containerId") &&
			((typeof manifest.containerId != "number") ||
		manifest.containerId <= 0 ||
		manifest.containerId % 1 != 0)
	) {
		outputObject.containerId = "Invalid";
		returnEmptyObject = false;
	}
	// prettier-ignore
	if (
		manifest.hasOwnProperty("destination") &&
		(typeof manifest.destination != "string" ||
		(manifest.destination).trim().length == 0)
	) {
		outputObject.destination = "Invalid";
		returnEmptyObject = false;
	}
	// prettier-ignore
	if(manifest.hasOwnProperty("weight") && (typeof manifest.weight != "number" ||
		manifest.weight <= 0 || Number.isNaN(manifest.weight) )){
		outputObject.weight = "Invalid";
		returnEmptyObject = false;
	}
	// prettier-ignore
	if (
		manifest.hasOwnProperty("unit") &&
		(((manifest.unit !== "lb") && (manifest.unit !== "kg")))
	) {
		outputObject.unit = "Invalid";
		returnEmptyObject = false;
	}
	if (
		manifest.hasOwnProperty("hazmat") &&
		typeof manifest.hazmat != "boolean"
	) {
		outputObject.hazmat = "Invalid";
		returnEmptyObject = false;
	}

	if (returnEmptyObject) {
		return {};
	}

	return outputObject;
}

function processManifest(manifest) {
	let checkedObject = validateManifest(manifest);
	const values = Object.values(checkedObject);
	if (values.includes("Invalid")) {
		console.log(`Validation error: ${manifest.containerId}`);
		console.log(checkedObject);
	} else if (values.includes("Missing")) {
		console.log(`Validation error: undefined`);
		console.log(checkedObject);
	} else {
		console.log(`Validation success: ${manifest.containerId}`);
		manifest = normalizeUnits(manifest);
		console.log(`Total weight: ${manifest.weight} kg`);
	}
}
