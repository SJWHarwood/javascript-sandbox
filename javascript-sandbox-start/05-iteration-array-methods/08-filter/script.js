const numbers = [1,2,4,5,6,7,8,9,10];

// const evenNumbers = numb


//With for each

let evenNumbers = [];
numbers.forEach( number => {
  if (number % 2 === 0) {
     evenNumbers.push(number)
  }
});




console.log(evenNumbers)
