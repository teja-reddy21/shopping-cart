import React from 'react'
import Navbar from '../Components/Navbar'
import { tvData } from '../Data/tv'
import { Link } from 'react-router-dom'
const TvPage = () => {
  return (
   <>
   <Navbar/>
   <div className='page-section'>
         {tvData.map((item)=>{
      return(
       <div>
        <Link to={`/tv/${item.id}`}>
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

export default TvPage
