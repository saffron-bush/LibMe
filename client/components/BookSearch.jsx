import request from 'superagent'
import React, { useState, useEffect } from 'react'
import { GetBook } from '../apiClient'

function BookSearch() {
  const [bookData, setBookData] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [input, setInput] = useState('')
  const [searchTerm, setSearchTerm] = useState([])
  const [isError, setIsError] = useState('')

  useEffect(() => {
    setIsLoading(true)
    GetBook()
      .then((response) => {
        setBookData(response.docs)
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

  console.log(bookData)


  if (isLoading) return <h1>one moment...</h1>
  if (isError) return <h1>Can't get Book</h1>
  return (
    <div>
      <>
        <form>
          <input  type="text" 
                  name="input" 
                  index="input" 
                  onChange={handleChange} />
          <button onClick={handleSubmit}>Search</button>
        </form>
      </>
      <h2>{bookData.title}</h2>
      <ul>
        {bookData.map((item, index) => {
           return <li key={index}>
            <h4>{item.title} - {item.author_name}</h4>
            </li>
        })}
      </ul>
    </div>
  )
}
export default BookSearch


