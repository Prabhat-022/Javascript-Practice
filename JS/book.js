const Books = [
    { title: 'Book one', genre: 'science', publish: 2000, addition: 2016 },
    { title: 'Book two', genre: 'fiction', publish: 2030, addition: 2010 },
    { title: 'Book three', genre: 'Histroy', publish: 1099, addition: 2019 },
    { title: 'Book four', genre: 'fiction', publish: 2000, addition: 2016 },
    { title: 'Book five', genre: 'motivation', publish: 2000, addition: 2016 },
    { title: 'Book six', genre: 'fiction', publish: 2000, addition: 2016 },
    { title: 'Book seven', genre: 'Non-fiction', publish: 2000, addition: 2016 },
    { title: 'Book eight', genre: 'fiction', publish: 2000, addition: 2016 },
    { title: 'Book nine', genre: 'Love story', publish: 2000, addition: 2016 },
    { title: 'Book ten', genre: 'fiction', publish: 2000, addition: 2016 },
    { title: 'Book eleven', genre: 'comedy', publish: 2010, addition: 2016 },
]
// export default Books;

let newBooks = Books.filter((bk) => bk.genre === 'comedy')

newBooks = Books.filter((bk) => {
    return bk.genre === 'fiction' || bk.publish>= 2015 })

console.log(newBooks);