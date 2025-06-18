import React, { useState } from 'react'
import { mobileData } from '../Data/mobiles'
import { Link } from 'react-router-dom'
import Navbar from '../Components/Navbar'
const Mobile = () => {
  const [selectedProduct,setSelectedProduct]=useState([])

  const companyHandler=(mango)=>{
      if(selectedProduct.includes(mango)){
        setSelectedProduct(selectedProduct.filter(item=>item !== mango))
      }else{
        setSelectedProduct([...selectedProduct,mango])
      }
  }

  const filteredProduct = selectedProduct.length===0?
       mobileData : mobileData.filter((orange)=>selectedProduct.includes(orange.company))
  return (
    <> 
    <Navbar/>
    <div className="fullpage">
      <div className="pro-selected">
      {mobileData.map((phone)=>{
        return (
          <div className='pro-input'>
            <label>
              <input type="checkbox" checked={selectedProduct.includes(phone.company)}
              onChange={()=>companyHandler(phone.company)}
              />
              {phone.company}
            </label>
          </div>
        )
      })}
    </div>
    <div className='page-section'>
      {filteredProduct.map((item)=>{
   return(
    <div>
      <Link to={`/mobiles/${item.id}`}>
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

export default Mobile
