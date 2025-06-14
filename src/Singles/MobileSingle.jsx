import React from 'react'
import { mobileData } from '../Stores/Data/mobiles'
import { useParams } from 'react-router-dom'
const MobileSingle = () => {
     const {id}=useParams()
     const product =mobileData.find((item)=>item.id===id)
     console.log(id)
  return (
   <div className="ind-page">
    <div className="ing-image">
      <img src={product.image} alt=''/>
    </div>
   <div className="ind-detaiils space">
    <div className="ind-company">
      <h2>{product.company}</h2>
    </div>
     <div className="ind-model">
      <h3>{product.model}</h3>
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

export default MobileSingle
