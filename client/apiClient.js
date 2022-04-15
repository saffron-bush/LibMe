import request from 'superagent'

// export function getBook() {
//   return request.get('/greeting').then((res) => res.body.greeting)
// }

// export function getOneFilm(id) {
//   return request.get(`https://ghibliapi.herokuapp.com/films/${id}`).then((response) => response.body)
//  }

export function GetBook(title) {
 return request.get(`http://openlibrary.org/search.json?title=${title}`).then((response) => response.body)
}


// export function GetBook() {
//   return request.get(`http://openlibrary.org/search.json?q=the+lord+of+the+rings`).then((response) => response.body)
// }

