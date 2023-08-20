 function replaceFirstItem () {

  const firstItem = document.querySelector('li:first-child');

   const li = document.createElement('li');
   li.textContent = 'Replaced first item';

    firstItem.replaceWith(li)

  };

function replaceSecondItem() {

  const secondItem = document.querySelector('li:nth-child(2)');

  secondItem.outerHTML = '<li>Replaced Second item</li>';


}

function replaceAll () {

  const lis = document.querySelectorAll('li');
    // lis.forEach((item, index) => {

    //   if (index === 1) {

    //     item.innerHTML = 'Second Item';
    //   }else{

    //     item.innerHTML = 'Replaced';}

    // });

    lis.forEach((item, index) => item.outerHTML = index === 1 ?
      '<li>Second Item</li>' : '<li>Replaced</li>');

}

  function replaceChildHeading () {
    const header = document.querySelector('header');
    const h1 = document.querySelector('header h1');

    const h2 = document.createElement('h2');
    h2.id = 'app-title';
    h2.textContent = 'Shopping list';

    header.replaceChild(h2, h1);

}

  // replaceFirstItem();
  // replaceSecondItem();

  replaceAll();
  replaceChildHeading();
