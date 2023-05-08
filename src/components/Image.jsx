import React from 'react'
import photo from "../assets/beachfile/beach.jpg"


function Image() {
  return (
    <div className=' flex justify-center items-center'>
          <img className=' w-full' src={photo}></img>
    </div>
  )
}

export default Image