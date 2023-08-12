const div = document.createElement('div');
div.className = 'my-element ';
div.id = 'my-element';
div.setAttribute('title', 'My Element');

// div.innerText = 'Hello World';


const text = document.createTextNode('Hello World');
text.className = 'btn-link text-red'


const button = document.createElement('button');
button.className = "btn-link text-red"

button.appendChild(text);




button.appendChild()

div.appendChild(button);

document.querySelector('ul').appendChild(div);

console.log(div)
