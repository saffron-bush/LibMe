import React from 'react';
import { FaHeart } from "react-icons/fa";
import { GetBook } from '../apiClient'

function AddToReadingList () {
return (
  <>
    <button>
      <div className="button">
        <span>
          <FaHeart className="heart" /> Add to Reading List
        </span>
      </div>
    </button>
  </>
)
}



export default AddToReadingList