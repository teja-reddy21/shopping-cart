import React, { useState } from 'react'
import Navbar from '../Components/Navbar'
import { fridgeData } from '../Data/fridge'
import { Link } from 'react-router-dom'
const FridgePage = () => {
  const [selectedProduct,setSelectedProduct]=useState([])
      
        const companyHandler=(mango)=>{
            if(selectedProduct.includes(mango)){
              setSelectedProduct(selectedProduct.filter(item=>item !== mango))
            }else{
              setSelectedProduct([...selectedProduct,mango])
            }
        }
      
        const filteredProduct = selectedProduct.length===0?
             fridgeData : fridgeData.filter((orange)=>selectedProduct.includes(orange.brand))
  return (
    <>
    <Navbar/>
     <div className="fullpage">
             <div className="pro-selected">
             {fridgeData.map((phone)=>{
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
          <Link to={`/fridge/${item.id}`}>
            <div className='pageImg'>
                <img src={item.image} alt=''/>
            </div>
            </Link>
            <div className="pro-model">
                {item.company},{item.model}
            </div>
            </div>
       )
          })}
        </div>
        </div>
    </>
  )
}

export default FridgePage
