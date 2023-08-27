function removeButton() {

  const clearBtn = document.querySelector('#clear');
  clearBtn.remove

}

function removeFirstItem() {

   const ul = document.querySelector('ul');
   const li = document.querySelector('li:first-child');

   ul.removeChild(li)
}

function removeItem (itemNumber) {

  const ul = document.querySelector('ul');
  const li = document.querySelector(`li:nth-child(${itemNumber})`);

  ul.removeChild(li)

}


const removeItem2 = (itemNumber) => document.querySelectorAll('li')
[itemNumber - 1].remove();



removeButton();
// removeFirstItem();
// removeItem(4);
removeItem2( )
