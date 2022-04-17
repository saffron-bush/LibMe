import request, { search } from 'superagent'
import React, { useState, useEffect } from 'react'
import { GetBook } from '../apiClient'
import AddToReadingList from './AddToReadingList'

const FavComponent = AddToReadingList

function BookSearch() {
  const [bookData, setBookData] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [input, setInput] = useState('')
  const [searchTerm, setSearchTerm] = useState('ABC')
  const [isError, setIsError] = useState('')

  useEffect(() => {
    setIsLoading(true)
    GetBook(searchTerm)
      .then((bookData) => {
        setBookData(bookData.docs)
        console.log(bookData.docs)
        setIsError(false)
      })
      .finally(() => {
        setIsLoading(false)
      })
      .catch((err) => {
        setIsError(true)
      })
  }, [searchTerm])

  function handleChange(evt) {
    setInput(evt.target.value)
  }

  function handleSubmit(evt) {
    evt.preventDefault()
    //GetBook(input)
    setSearchTerm(input)
  }

  if (isLoading) return <h1>one moment...</h1>
  if (isError) return <h1>Can't get Book</h1>

  return (
    <div className = 'booksSearch'>
      <>
        <form>
          <label>Enter Book Title:
          <input  type="text" 
                  name="input" 
                  index="input" 
                  onChange={handleChange} />
          <button onClick={handleSubmit}>Search</button>
          </label>
        </form>
      </>
      <div></div>
      <ul>
        {bookData.map((item, index) => {
         return ( <li key={index}><h4>{item.title} - {item.author_name[0]} <FavComponent/></h4></li>) 
        })}
      </ul>
     </div>
  )
      
}
export default BookSearch


