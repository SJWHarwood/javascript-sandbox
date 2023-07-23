
// // Loop through arrays

// const items = ['book', 'table', 'chair', 'kite'];
// const users = [ { name:'Brad' },{ name:'Kate' },{ name:'Steve' }];


// // for (const item of items) {
// //   console.log(item)
// // };

// for (const user of users) {
// console.log(user)


// // Loop over strings

//  const str = 'Hello World';

//  for (const letter of str) {
//   console.log(letter)
//  }

// loop over maps

const map = new Map();
map.set('Name', 'Simon');
map.set('Age', '27');

for ([key, value] of map){
  console.log(key, value);
}
