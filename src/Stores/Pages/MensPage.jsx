import React from 'react'
import Navbar from '../Components/Navbar'
import { menData } from '../Data/mens'
const MensPage = () => {
  return (
   <>
   <Navbar/>
   <div className='page-section'>
         {menData.map((item)=>{
      return(
       <div>
           <div className='pageImg'>
               <img src={item.image} alt=''/>
           </div>
           <div className="pro-model">
               {item.company},{item.model}
           </div>
           </div>
      )
         })}
       </div>
   </>
  )
}

export default MensPage
