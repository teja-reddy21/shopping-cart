import React, { useState } from 'react'
import Navbar from '../Components/Navbar'
import { menData } from '../Data/mens'
import { Link } from 'react-router-dom'
const MensPage = () => {
  const [selectedProduct,setSelectedProduct]=useState([])
  
    const companyHandler=(mango)=>{
        if(selectedProduct.includes(mango)){
          setSelectedProduct(selectedProduct.filter(item=>item !== mango))
        }else{
          setSelectedProduct([...selectedProduct,mango])
        }
    }
  
    const filteredProduct = selectedProduct.length===0?
         menData : menData.filter((orange)=>selectedProduct.includes(orange.type))
  return (
   <>
   <Navbar/>
   <div className="fullpage">
         <div className="pro-selected">
         {menData.map((phone)=>{
           return (
             <div className='pro-input'>
               <label>
                 <input type="checkbox" checked={selectedProduct.includes(phone.type)}
                 onChange={()=>companyHandler(phone.type)}
                 />
                 {phone.type}
               </label>
             </div>
           )
         })}
       </div>
   <div className='page-section'>
         {filteredProduct.map((item)=>{
      return(
       <div>
        <Link to={`/mens/${item.id}`}>
           <div className='pageImg'>
               <img src={item.image} alt=''/>
           </div>
           </Link>
           <div className="pro-model">
               {item.type},{item.model}
           </div>
           </div>
      )
         })}
       </div>
       </div>
   </>
  )
}

export default MensPage
