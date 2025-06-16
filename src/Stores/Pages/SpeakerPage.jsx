import React from 'react'
import Navbar from '../Components/Navbar'
import { speakerData } from '../Data/speaker'
import { Link } from 'react-router-dom'
const SpeakerPage = () => {
  return (
   <>
   <Navbar/>
   <div className='page-section'>
         {speakerData.map((item)=>{
      return(
       <div>
        <Link to={`/speaker/${item.id}`}>
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
   </>
  )
}

export default SpeakerPage
