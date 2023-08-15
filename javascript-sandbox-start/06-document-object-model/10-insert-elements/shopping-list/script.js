// insertAdjacentElement Example
  function insertElement() {
    const filter = document.querySelector('.filter');

    const h1 = document.createElement('h1');
    h1.textContent = 'insert adjacent element';

    filter.insertAdjacentElement('afterEnd', h1)
  }
// insertAdjacentText Example

function insertText() {

  const item = document.querySelector('li:first-child');

  item.insertAdjacentText('beforebegin', 'Hello World');

}

// insertAdjacentHTML example

  function insertHTML() {
    const clearBtn = document.querySelector('#clear');

    clearBtn.insertAdjacentHTML('afterend', '<p>S.J.W.H</p>');
  }

// insertBefore Example

function insertBeforeItem() {
  const ul = document.querySelector('ul');

  const li = document.createElement('li');
  li.textContent = 'Insert before'

  const third = document.querySelector('li:nth-child(3)');

  ul.insertBefore(li, third);
}


insertElement();

insertText();

insertHTML();

insertBeforeItem();
/*
<!-- beforebegin -->
<p>
  <!-- afterbegin -->
  foo
  <!-- beforeend -->
</p>
<!-- afterend -->
*/
