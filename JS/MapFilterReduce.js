const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


const newNums = myNums.filter((num) => {
    return num > 4
})

//! stating scope{} then use return keyword otherwise output []
// const newNums = myNums.filter((num) => 
//      num > 4
// )

// const newNums = [];  //create arr
// myNums.forEach((num) => {
//     if (num > 4) {
//         newNums.push(num);
//     }
// })
// console.log(newNums);

// import { book } from'./book.js'

// const newbook = book.filter((bk)=>bk.gence ===' history')

// console.log(newbook)


// import { Books } from './book.js'; // Adjust the path accordingly

// !Applying filter to get books with genre "History"

// const historyBooks = Books.filter(book => book.genre.toLowerCase() === 'history');

// console.log(historyBooks); // This will print the array of history books

//! Maping function for and also filter 
const number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const newNumss = number.map((num) => (num + 10)).map((num) => (num + 1)).filter((num) => (num > 15))
console.log(newNumss);


//!Reduce 
const numbers = [1, 2, 3, 4, 5]; 

const sum = numbers.reduce((accumulator, currentValue) => {
    console.log(`Sum ${accumulator} , Curr ${currentValue}`)
  return accumulator + currentValue;
}, 0);

// console.log(sum); // Output: 15  

const shopingCart =[
    {
        itemName: 'js course',
        price: 10
    },
    {
        itemName: 'c++ course',
        price: 12
    },
    {
        itemName: 'C# course',
        price: 15
    },
    {
        itemName: 'React course',
        price: 5
    },
    {
        itemName: 'js course',
        price: 10
    },
]
const total = shopingCart.reduce((acc, val)=>{ return acc + val.price}, 0)
console.log(total)