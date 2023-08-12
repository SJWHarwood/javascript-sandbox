

let output;

const parent = document.querySelector('.parent');

output = parent.children[1].innerText;
output = parent.children[1].className;
output = parent.children[1].nodeName;

parent.children[1].innerText = 'Child Two';
parent.children[1].style.color = 'red';

parent.firstElementChild.innerText = 'Child One';
parent.firstElementChild.style.color = 'green';

parent.lastElementChild.innerText = 'Child Three';
parent.lastElementChild.style.color = 'orange';

// Get Parent Element by child

const child = document.querySelector('.child');

output = child.parentElement;
child.parentElement.style.border = '1px solid #ccc';
child.parentElement.style.padding = '10px';


// Sibling Elements

const secondItem = document.querySelector('.child:nth-child(2)');

output = secondItem
output = secondItem.nextElementSibling



console.log(output);
