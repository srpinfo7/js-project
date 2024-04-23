//Square of a Number

function squared(b) {
	return b**2;
}
console.log(squared(5));

// Return the Sum of Two Numbers

const addition = (a, b) => {
    return a+b;
}

console.log(addition(3, 2));


/* Sum of Polygon Angles

n will always be greater than 2.
The formula (n - 2) x 180 gives the sum of all the measures of the angles of an n-sided polygon. */

function sumPolygon(n) {
	if(n > 2)
    {
        return (n-2)*180 ;
    }
    else
    {
        console.log ("Please enter a number more than 2");
    }
}

console.log(sumPolygon(1));



//Convert Age to Days
// Use 365 days as the length of a year for this challenge.
// Ignore leap years and days between last birthday and now.
// Expect only positive integer inputs.

const calcAge = (age) => age * 365;
console.log (calcAge(65));