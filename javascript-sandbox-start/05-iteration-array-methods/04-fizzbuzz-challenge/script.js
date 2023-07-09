// # FizzBuzz Challenge

// **Instructions:**

// - Print/log the numbers from 1 to 100
// - For **multiples of three** print "Fizz" instead of the number
// - For **multiples of five** print "Buzz"
// - For numbers which are **multiples of both three and five** print "FizzBuzz".


// for loop

// for (x = 1; x <= 100; x++ ) {
//   if (x % 15 == 0) {
//     console.log('FizzBuzz');
//   } else if ( x % 3 == 0) {
//     console.log('Fizz');
//   } else if (x % 5 == 0) {
//     console.log ('Buzz');
//   } else {
//     console.log(x);
//   }
// }

// While loop

let s = 1;

while (s <= 100) {
  if (s % 15 == 0) {
    console.log('FizzBuzz');
  } else if ( s % 3 == 0) {
    console.log('Fizz');
  } else if (s % 5 == 0) {
    console.log ('Buzz');
  } else {
    console.log(s);
  }
  s++;

}
