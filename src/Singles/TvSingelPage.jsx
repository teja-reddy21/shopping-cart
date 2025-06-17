import React from 'react'
import { tvData } from '../Stores/Data/tv'
import { useParams } from 'react-router-dom'
import Navbar from '../Stores/Components/Navbar'
const TvSingelPage = () => {
     const {id}=useParams()
     const product =tvData.find((item)=>item.id===id)
     console.log(id)
     console.log(product.image)
  return (
    <>
    <Navbar/>
    <div className="ind-page">
    <div className="ing-image">
      <img src={`/${product.image}`} alt=''/>
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
   </>
  )
}

export default TvSingelPage
