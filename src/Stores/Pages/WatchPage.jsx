import React from 'react'
import Navbar from '../Components/Navbar'
import { watchData } from '../Data/watch'
import { Link } from 'react-router-dom'
const WatchPage = () => {
  return (
   <>
   <Navbar/>
    <div className='page-section'>
         {watchData.map((item)=>{
      return(
       <div>
        <Link to={`/watch/${item.id}`}>
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

export default WatchPage
