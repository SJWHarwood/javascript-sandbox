

// console.log(document.getElementById('app-title'));
// console.log(document.getElementById('app-title').id);


// document.getElementById('app-title').title = 'Shopping List';


// document.getElementById('app-title').setAttribute('class', 'title');

const title = document.getElementById('app-title');

// console.log(title)

//  // Get / Change Content

//  console.log(title.textContent);
//  title.textContent = 'Hello World';
//  title.innerText = 'Hello again';
//  title.innerHTML = '<strong>Shopping List</strong>';

 // Change Styles

 title.style.color = 'red';
 title.style.backgroundColor = 'black';
 title.style.padding = '10px';
 title.style.borderRadius = '10px';

 // document.querySelector()

 console.log(document.querySelector('h1'));
 console.log(document.querySelector('#app-title'));
 console.log(document.querySelector('.container'));
