/*
The Farm Problem
In this challenge, a farmer is asking you to tell him how many legs can be counted among all his animals. The farmer breeds three species:

chickens = 2 legs
cows = 4 legs
pigs = 4 legs
The farmer has counted his animals and he gives you a subtotal for each species. You have to implement a function that returns the total number of legs of all the animals.


Don't forget to return the result.
The order of animals passed is animals(chickens, cows, pigs).
Remember that the farmer wants to know the total number of legs and not the total number of animals.

*/

const animals = (chickens, cows, pigs) => (chickens*2)+(cows*4)+(pigs*4) ;
console.log (animals(5, 2, 8));


//Is the Number Less than or Equal to Zero?

function lessThanOrEqualToZero(num) {
	let result = num <= 0 ? true : false;
    return result;
}

console.log(lessThanOrEqualToZero(1));