import React from 'react'
import Navbar from '../Components/Navbar'
import { kitchenData } from '../Data/kitchen'
const KitchenPage = () => {
  return (
   <>
   <Navbar/>
    <div className='page-section'>
         {kitchenData.map((item)=>{
      return(
       <div>
           <div className='pageImg'>
               <img src={item.image} alt=''/>
           </div>
           <div className="pro-model">
               {item.brand},{item.model}
           </div>
           </div>
      )
         })}
       </div>
   </>
  )
}

export default KitchenPage
