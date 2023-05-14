
// Challenge 1

const library = [

  {
    title:'Lord Of The Rings',
    author: 'JRR Tolkien',
    status: {
      own: true,
      reading: false,
      read: false

    }
},
  {
    title:'Harry Potter',
    author: 'J K Rowling',
    status: {
      own: true,
      reading: false,
      read: false

    }
},
  {
    title:'From Russia With Love',
    author: 'Ian Flemming',
    status: {
      own: true,
      reading: false,
      read: false

    }
}


];

// Challenge 2

library[0].status.read = true;
library[1].status.read = true;
library[2].status.read = true;

// Challenge 3

const {title: firstBook} = library[0];


// Challenge 4

const libraryJSON = JSON.stringify(library)





console.log(libraryJSON);
