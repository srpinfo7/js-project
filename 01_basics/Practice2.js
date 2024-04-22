//Area of a Triangle
// function triArea(base, height) {
// 	return ((base * height)/2);
// }
triArea=(b,h)=>(b*h)>>1;
console.log(triArea(7, 4));

triArea=(b,h)=>(b*h)>>1;

// Convert Minutes into Seconds

function convert(minutes) {
	return  (minutes * 60)
}

console.log(convert(5));

//Return the First Element in an Array
function getFirstValue(arr) {
	//return arr[0];
    let firstValue = Array.isArray(arr) ? arr[0] : "Not an array";
    return firstValue;
}

console.log(getFirstValue());
console.log(getFirstValue([20,41,17]));

//Find the Perimeter of a Rectangle

// function findPerimeter(length, width) {
// 	return (2*(length+width));
// }

const perimeter = (length,width) => 2*(length+width)
console.log(perimeter(6, 7));

// Return Something to Me!

function giveMeSomething(a) {
	return `something ${a}`;
}

console.log (giveMeSomething("about today !"));