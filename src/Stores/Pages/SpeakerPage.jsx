import React from 'react'
import Navbar from '../Components/Navbar'
import { speakerData } from '../Data/speaker'
const SpeakerPage = () => {
  return (
   <>
   <Navbar/>
   <div className='page-section'>
         {speakerData.map((item)=>{
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

export default SpeakerPage
