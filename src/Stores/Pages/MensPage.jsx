import React from 'react'
import Navbar from '../Components/Navbar'
import { menData } from '../Data/mens'
import { Link } from 'react-router-dom'
const MensPage = () => {
  return (
   <>
   <Navbar/>
   <div className='page-section'>
         {menData.map((item)=>{
      return(
       <div>
        <Link to={`/mens/${item.id}`}>
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

export default MensPage
