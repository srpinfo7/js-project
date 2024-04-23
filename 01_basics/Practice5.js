// Maximum Edge of a Triangle

function nextEdge(side1, side2) {
    // Validate positive integer input
    if (side1 <= 0 || side2 <= 0) {
      return -1; // Invalid input
    }
  
    // Calculate the maximum range using the triangle inequality
    return side1 + side2 - 1;
  }
  
  console.log(nextEdge(10, 8));

  //Are the Numbers Equal?

  const isSame= (num1,num2) => num1 === num2 ?true:false;
  console.log(isSame(2,3));

  // Print the array to given number of Item
 
  function printArray(number)
  {
    let arr= [];
    for(i=0;i<=number;i++)
    {
       arr.push(i);
    }
    return arr;
  }

  console.log(printArray(3));

  //Return the Remainder from Two Numbers

  const remainder = (a , b) => a % b;
  console.log(remainder(-9, 45));