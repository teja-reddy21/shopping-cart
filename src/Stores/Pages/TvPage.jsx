import React, { useState } from 'react'
import Navbar from '../Components/Navbar'
import { tvData } from '../Data/tv'
import { Link } from 'react-router-dom'
const TvPage = () => {
  const [selectedProduct,setSelectedProduct]=useState([])
      
        const companyHandler=(mango)=>{
            if(selectedProduct.includes(mango)){
              setSelectedProduct(selectedProduct.filter(item=>item !== mango))
            }else{
              setSelectedProduct([...selectedProduct,mango])
            }
        }
      
        const filteredProduct = selectedProduct.length===0?
             tvData : tvData.filter((orange)=>selectedProduct.includes(orange.model))
  return (
   <>
   <Navbar/>
    <div className="fullpage">
            <div className="pro-selected">
            {tvData.map((phone)=>{
              return (
                <div className='pro-input'>
                  <label>
                    <input type="checkbox" checked={selectedProduct.includes(phone.brand)}
                    onChange={()=>companyHandler(phone.brand)}
                    />
                    {phone.brand}
                  </label>
                </div>
              )
            })}
          </div>
   <div className='page-section'>
         {filteredProduct.map((item)=>{
      return(
       <div>
        <Link to={`/tv/${item.id}`}>
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

export default TvPage
