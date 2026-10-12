let manifest2 = {
	containerId: 0,
	destination: 405,
	weight: -84,
	unit: "pounds",
	hazmat: "no",
};
let manifest = {
	containerId: 1,
	destination: "Monterey, California, USA",
	weight: 831,
	unit: "lb",
	hazmat: false,
};

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
			return outputObject;
		}
	}
	if (inputManifestKeys.length == 0) {
		return outputObject;
	}
	if (typeof manifest.containerId != "number" || manifest.containerId <= 0) {
		outputObject.containerId = "Invalid";
		returnEmptyObject = false;
	}
	if (typeof manifest.destination != "string") {
		outputObject.destination = "Invalid";
		returnEmptyObject = false;
	}
	if (typeof manifest.weight != "number" || manifest.weight <= 0) {
		outputObject.weight = "Invalid";
		returnEmptyObject = false;
	}
	if (!((manifest.unit == "lb") ^ (manifest.unit == "kg"))) {
		outputObject.unit = "Invalid";
		returnEmptyObject = false;
	}
	if (typeof manifest.hazmat != "boolean") {
		outputObject.hazmat = "Invalid";
		returnEmptyObject = false;
	}

	if (returnEmptyObject) {
		return {};
	}

	return outputObject;
}

function processManifest(manifest) {
	console.log(`Validation success: ${manifest.containerId}`);

	manifest = normalizeUnits(manifest);
	console.log(`Total weight: ${manifest.weight} kg`);
}
normalizeUnits(manifest);
console.log(validateManifest(manifest));
