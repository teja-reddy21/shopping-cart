import React from 'react'
import { booksData } from '../Stores/Data/books'
import { useParams } from 'react-router-dom'
import Navbar from '../Stores/Components/Navbar'
import { useCart } from '../Stores/Context/CartContext'
const BooksSingle = () => {
      const {id}=useParams()
   const {addToCart}=useCart()
     const product =booksData.find((item)=>item.id===id)
     console.log(id)
    
  return (
    <>
    <Navbar/>
     <div className="ind-page">
    <div className="ing-image">
      <img src={`/${product.image}`} alt=''/>
    </div>
   <div className="ind-detaiils space">
    <div className="ind-company">
      <h2>{product.author}</h2>
    </div>
     <div className="ind-model space">
      <h3>{product.category}</h3>
    </div>
    <div className="ind-price space">
      <h2>{product.price}</h2>
    </div>
    <div className="ind-desc space">
      <p>{product.description}</p>
    </div>
    <button onClick={()=>addToCart(product)}>Add to Cart</button>
   </div>
   </div>
   </>
  )
}

export default BooksSingle
