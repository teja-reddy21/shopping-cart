import React from 'react'
import Navbar from '../Components/Navbar'
import { booksData } from '../Data/books'
import { Link } from 'react-router-dom'
const BooksPage = () => {
  return (
  <>
  <Navbar/>
   <div className='page-section'>
        {booksData.map((item)=>{
     return(
      <div>
        <Link to={`/books/${item.id}`}>
          <div className='pageImg'>
              <img src={item.image} alt=''/>
          </div>
          </Link>
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
