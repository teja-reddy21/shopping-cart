import React from 'react'
import Navbar from '../Components/Navbar'
import { kitchenData } from '../Data/kitchen'
import { Link } from 'react-router-dom'
const KitchenPage = () => {
  return (
   <>
   <Navbar/>
    <div className='page-section'>
         {kitchenData.map((item)=>{
      return(
       <div>
        <Link to={`/kitchen/${item.id}`}>
           <div className='pageImg'>
               <img src={item.image} alt=''/>
           </div>
           </Link>
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
