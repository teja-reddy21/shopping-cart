import React, { useState } from 'react'
import Navbar from '../Components/Navbar'
import { speakerData } from '../Data/speaker'
import { Link } from 'react-router-dom'
const SpeakerPage = () => {
  const [selectedProduct,setSelectedProduct]=useState([])
    
      const companyHandler=(mango)=>{
          if(selectedProduct.includes(mango)){
            setSelectedProduct(selectedProduct.filter(item=>item !== mango))
          }else{
            setSelectedProduct([...selectedProduct,mango])
          }
      }
    
      const filteredProduct = selectedProduct.length===0?
           speakerData : speakerData.filter((orange)=>selectedProduct.includes(orange.model))
  
  return (
   <>
   
   <Navbar/>
    <div className="fullpage">
         <div className="pro-selected">
         {speakerData.map((phone)=>{
           return (
             <div className='pro-input'>
               <label>
                 <input type="checkbox" checked={selectedProduct.includes(phone.model)}
                 onChange={()=>companyHandler(phone.model)}
                 />
                 {phone.model}
               </label>
             </div>
           )
         })}
       </div>
   <div className='page-section'>
         {filteredProduct.map((item)=>{
      return(
       <div>
        <Link to={`/speaker/${item.id}`}>
           <div className='pageImg'>
               <img src={item.image} alt=''/>
           </div>
           </Link>
           <div className="pro-model">
               {item.brand},{item.model}
           </div>
           </div>
      )
         })}
       </div>
       </div>
   </>
  )
}

export default SpeakerPage
