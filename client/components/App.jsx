import React from 'react'
import request from 'superagent'
import { getBook } from '../apiClient'
import BookSearch from './BookSearch'


function App() {
  return (
    <main>
      <h1>{"grab some books"}</h1>
      <h2>{"Today, we're going to look at books ϞϞ(๑⚈ ․̫ ⚈๑)∩"}</h2>
      <BookSearch/>
    </main>
  )
}


export default App
