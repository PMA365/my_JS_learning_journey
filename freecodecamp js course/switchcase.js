let vehicle = "car";

switch (vehicle) {
	case "bike":
		console.log("Bikes are two-wheelers.");
		break;

	case "car":
		console.log("Some cars are 4x4.");

	case "truck":
		console.log("Trucks can carry heavy loads.");
		break;

	default:
		console.log("Unknown vehicle.");
}

// output :"Some cars are 4x4."
//        "Trucks can carry heavy loads."

// why "Trucks can carry heavy loads." also got printed?

// That happens because a switch statement stops checking conditions the moment it finds a match.

// It splits into two completely separate phases:

// The Finding Phase: JavaScript looks down the list of cases to find a match. Once it finds "car", it stops looking at conditions entirely.

// The Execution Phase: JavaScript starts running the code from that entry point onward, line by line, completely ignoring the case "truck" label.
