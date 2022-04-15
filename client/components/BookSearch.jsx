import request from 'superagent'
import React, { useState, useEffect } from 'react'
import { GetBook } from '../apiClient'

function BookSearch () {
  const [bookData, setBookData] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  
  useEffect (() => {
    setIsLoading(true)
     GetBook()
       .then((res) => {
       setBookData(res.docs)
     })
     .finally(() => {
      setIsLoading(false)
      })
     .catch((err) => {
       console.error(err)
     })
    }, []);

 
  
  if(isLoading) return <h1>one moment...</h1>
   return (
     <div>
       <h2> Hi there </h2>
       <ul>
         {bookData.map((item, i) => {
           return <li>{item.title}</li>
         })}
       </ul>
       <form>
        <input type='text' name='input' id='input'/>
        <button type='submit'>Search</button>
      </form>
     </div>
   )
 }

export default BookSearch