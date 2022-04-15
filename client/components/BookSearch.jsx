import request from 'superagent'
import React, { useState, useEffect } from 'react'
import { GetBook } from '../apiClient'
import Search from './SingleBookSearch'

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
       {/* <h2> Hi there </h2>
       <ul>
         {bookData.map((item, i) => {
           return <li>{item.title}</li>
         })}
       </ul> */}
       <Search/>
     </div>
   )
 }

export default BookSearch