import request from 'superagent'

//const searchTerm = `http://openlibrary.org/search.json?title=`({searchTerm})
// export function getBook() {
//   return request.get('/greeting').then((res) => res.body.greeting)
// }

// export function getOneFilm(id) {
//   return request.get(`https://ghibliapi.herokuapp.com/films/${id}`).then((response) => response.body)
//  }

export function GetBook(searchTerm) {
 return request.get(`http://openlibrary.org/search.json?title=${searchTerm}`).then((response) => response.body)
}


// export function GetBook() {
//   return request.get(`http://openlibrary.org/search.json?q=the+lord+of+the+rings`).then((response) => response.body)
// }


// export function GetCover(index.isbn) {
//   return request.get(`https://covers.openlibrary.org/b/isbn/${index.isbn[0]+}-M.jpg`).then((response) => response.body)
//  }


//`https://openlibrary.org/books/{item.author_key}+{item.title}`