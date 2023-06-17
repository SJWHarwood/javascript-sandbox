console.log(10 < 20 && 40 > 30 && 15 > 10); // and operator (&&) all statements have to be true to return a true value
console.log(10 > 20 || 30 > 15); // Or operator (||) one statement can be true to return a true value


// && - Will return first falsy value or the last value

let a;

a = 10 && 20; // returned the last value which is 20
a = 10 && 0 && 20; // returned 0 as 0 is falsy


console.log(a)


const posts = ['Post one', 'Post two'];

posts.length > 0 && console.log(posts[0]);

// || - Will return the first true value or the last value

let b;

b = 10 || 20; // Will return 10 as its the first true value
b = 0 || 20; // Will return 20 as its the first true value
b = 0 || undefined || null || ""; // Will return the empty string as its the last value

console.log(b);

// ?? - Will returns the right operand when the left is either null or undefined

let c;

c = 10 ?? 20; // returns 10 
c = null ?? undefined ?? 30; // returns 30 as left of the operand is null and undefined

console.log(c);
