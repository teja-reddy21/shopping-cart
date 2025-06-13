import React from 'react'
import Navbar from '../Components/Navbar'
import { watchData } from '../Data/watch'
const WatchPage = () => {
  return (
   <>
   <Navbar/>
    <div className='page-section'>
         {watchData.map((item)=>{
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

export default WatchPage
