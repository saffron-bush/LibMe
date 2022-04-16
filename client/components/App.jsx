import React, { useState } from 'react'
import request, { search } from 'superagent'
import { getBook } from '../apiClient'
import BookSearch from './BookSearch'
import Heading from './Heading'
import AddToReadingList from './AddToReadingList'



function App() {
  return (
    <main>
      <div className="banner">
        <img className="banner-image" src="img/image-from-rawpixel-id-2843581-jpeg.jpg"></img>
      </div>
      <Heading />
      <BookSearch handleFavClick={AddToReadingList} favComponent = {AddToReadingList}/>
    </main>
  )
}


export default App
