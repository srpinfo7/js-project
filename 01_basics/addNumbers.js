// Program to add two numbers

/*
let a=6;
let b=8;
console.log("Sum of a & b :", a + b);

// We can also use ` for string concatenation
console.log(`Sum of a & b : ${a+b}`);
*/

// ******** Add Two number using functions ***** 

// function add(a, b)
// {
//     console.log(`Sum of a & b is ${a + b}`);
// }

// for (let i=0;i<5;i++)
// {
//     for (let j=0;j<5;j++)
//     {
//         console.log(`For ${i} & ${j}`);
//         add(i,j);
//     }
// }

/* Using Arrow function */

let addition = (a,b) => (a+b);

let a = 5;
let b = 7;
let sum = addition(a,b);
console.log(`sum of a,b is ${sum}`);

// Adding two float number in Java script

let val = parseFloat('2.3') + parseFloat('2.4');
console.log("2.3 + 2.4 = " + val);

function gfg_Run() {
	console.log("2.3 + 2.4 = "
		+ (parseFloat('2.3') +
			parseFloat('2.4')).toFixed(2));
}
gfg_Run()

let val1 = 2.3+ 2.4;
console.log(val1.toFixed(3));