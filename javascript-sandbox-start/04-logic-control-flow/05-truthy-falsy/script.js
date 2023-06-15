// const email = 'test@test.com';

// if(email) {
//   console.log('You passed in an email');
// }

// console.log(Boolean(email));



// Falsey Values:
// false
// 0
// "" or '' (empty string)
// null
// undefined
// NaN

// Truthy Values:
// true
// 0 but in string '0'
// space in a string '  '
// Empty array []
// empty object {}
// empty function function() {}

const x = '  ';

if (x) {
  console.log('This is truthy');
} else {
  console.log('This is falsy');
}

console.log(Boolean(x))

// Truthy and falsey caveats

const children = 0 ;

if(children !== undefined) {
  console.log(`You have ${children} children`);
}else {
  console.log('Enter number of children');
}

//checking for empty arrays

const post = ['4','3'];

if(post) {
  console.log('You have posts');
} else {
  console.log('Please enter post information');
}

//checking for empty objects

const user = {
name: 'Simon'
};

if (Object.keys(user).length > 0) {
  console.log('list user');
}else{
  console.log('no user');
};

// loose equality

console.log(false == 0);
console.log(false === 0);
