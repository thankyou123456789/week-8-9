// do while loops 
// let i = 5; 
// do{ 
// console.log('val of i is: ', i); 
// i++; 
// } while(i < 5); 

// program to display numbers 
// let i = 1; 
//  const n = 5; 

// do...while loop from 1 to 5 
// do { 
//     console.log(i); 
//     i++; 
// } while(i <= n); 

// to find the sum of positive numbers 
// if the user enters negative number, the loop terminate s 
// negative number is not added to sum

let sum = 0; 
let number = 0; 
do { 
    sum += number; 
    number = parseInt(prompt('Enter a number: ')); 
} while(number >= 0) 

console.log(`The sum is ${sum}.`);
