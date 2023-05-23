

function registerUser(user = 'bot') {
  return user + ' is registered';
}

console.log(registerUser('simon'));

// Rest parameters

function sum(...numbers) {

  let total = 0;

  for( const num of numbers) {
    total += num;
  }
return total
}

console.log(sum(1,2,3));

// Objects as params

function loginUser(user) {
  return `The user ${user.name} has the id of ${user.id} is logged in`;
}


const user = {
  name: 'Simon',
  id: 1
};

console.log(loginUser(user))
console.log(loginUser({
  name: 'John',
  id: 2
}))

// Arrays as Params

function randArray(...arr) {
  const randomIndex = Math.floor(Math.random() * arr.length);

  const item = arr[randomIndex];

  console.log(item);

}

randArray(1,2,3,4,5,6,7,8,9,10);
