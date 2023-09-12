const logo = document.querySelector('img');

const onClick = () => console.log('click event');

const onDoubleClick = () =>  console.log('double click')

// Event Listeners
logo.addEventListener('dblclick', onDoubleClick);
