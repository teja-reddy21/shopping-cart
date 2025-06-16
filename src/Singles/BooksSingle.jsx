import React from 'react'
import { booksData } from '../Stores/Data/books'
import { useParams } from 'react-router-dom'
const BooksSingle = () => {
      const {id}=useParams()
     const product =booksData.find((item)=>item.id===id)
     console.log(id)
     console.log(product.image)
  return (
     <div className="ind-page">
    <div className="ing-image">
      <img src={`/${product.image}`} alt=''/>
    </div>
   <div className="ind-detaiils space">
    <div className="ind-company">
      <h2>{product.author}</h2>
    </div>
     <div className="ind-model">
      <h3>{product.category}</h3>
    </div>
    <div className="ind-price">
      <h2>{product.price}</h2>
    </div>
    <div className="ind-desc">
      <p>{product.description}</p>
    </div>
    <button>Add to Cart</button>
   </div>
   </div>
  )
}

export default BooksSingle
