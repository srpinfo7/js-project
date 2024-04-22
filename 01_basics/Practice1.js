//Convert Hours into Seconds

function howManySeconds(hours) {
	let hourInSeconds= hours*60*60;
	return hourInSeconds;
}

console.log(howManySeconds(2));
console.log(howManySeconds(10));
console.log(howManySeconds(24));

// Power Calculator

function circuitPower(voltage, current) {
	return (voltage*current).toString();
}

console.log(circuitPower(110, 3));
console.log(typeof(circuitPower(110, 3)));