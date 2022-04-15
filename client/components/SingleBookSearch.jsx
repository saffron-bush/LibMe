import React, {useState} from "react"
import { GetBook } from "../apiClient"


function Search() {
  const [input, setInput] = useState('')
  const [searchTerm, setSearchTerm] = useState('')

  function handleChange(evt) {
    setInput(evt.target.value)
  }

 

  function handleSubmit(evt) {
    evt.preventDefault()
    console.log(input)
    GetBook(input)
    //setSearchTerm(input)
  }

return (
  <>
   <form>
        <input type='text' name='input' id='input' onChange={handleChange}/>
        <button onClick={handleSubmit}>Search</button>
      </form>
  </>
)
}

export default Search