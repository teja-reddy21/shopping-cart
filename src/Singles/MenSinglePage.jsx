import React from 'react'
import { menData } from '../Stores/Data/mens'
import { useParams } from 'react-router-dom'
import Navbar from '../Stores/Components/Navbar'
import { useCart } from '../Stores/Context/CartContext'
const MenSinglePage = () => {
     const {id}=useParams()
     const {addToCart}=useCart()
     const product =menData.find((item)=>item.id===id)
     console.log(id)
     console.log(product.image)
  return (
    <>
    <Navbar/>
    <div className="ind-page">
    <div className="ing-image">
      <img src={product.image} alt=''/>
    </div>
   <div className="ind-detaiils space">
    <div className="ind-company">
      <h2>{product.company}</h2>
    </div>
     <div className="ind-model space">
      <h3>{product.model}</h3>
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

export default MenSinglePage
