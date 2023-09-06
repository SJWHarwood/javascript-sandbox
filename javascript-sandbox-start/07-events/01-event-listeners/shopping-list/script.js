const clearBtn = document.querySelector('#clear');


function onClear() {
  const itemList =  document.querySelector('ul');
  const items = document.querySelectorAll('li');

  items.forEach((item) => item.remove())

  // itemList.innerHTML = '';


  while (itemList.firstChild) {
    itemList.removeChild(itemList.firstChild);
  }


}

// clearBtn.onclick = function () {

//   alert('Clear items');
// }

// Add event listener

// clearBtn.addEventListener('click', function () {
//   alert('Clear Items');
// })

clearBtn.addEventListener('click', onClear );
