import React from 'react'
import { booksData } from '../Data/books'
const Books = () => {
     const firstFiveImages=booksData.slice(0,5)
  return (
      <>
     <div className="proTile">
   <h2>books</h2>
   </div>
        <div className='pro-section'>
      {
        firstFiveImages.map((item)=>{
          return(
        <div className='imgbox'>
            <img src={item.image} alt='' className='proImg'/>
        </div>
          )
        })
      }
    </div>
    </>
  )
}

export default Books
