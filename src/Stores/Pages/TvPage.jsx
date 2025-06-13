import React from 'react'
import Navbar from '../Components/Navbar'
import { tvData } from '../Data/tv'
const TvPage = () => {
  return (
   <>
   <Navbar/>
   <div className='page-section'>
         {tvData.map((item)=>{
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

export default TvPage
