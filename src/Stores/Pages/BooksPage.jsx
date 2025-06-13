import React from 'react'
import Navbar from '../Components/Navbar'
import { booksData } from '../Data/books'
const BooksPage = () => {
  return (
  <>
  <Navbar/>
   <div className='page-section'>
        {booksData.map((item)=>{
     return(
      <div>
          <div className='pageImg'>
              <img src={item.image} alt=''/>
          </div>
          <div className="pro-model">
              {item.author},{item.price}
          </div>
          </div>
     )
        })}
      </div>
  </>
  )
}

export default BooksPage
