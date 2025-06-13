import React from 'react'
import { mobileData } from '../Data/mobiles'
import { Link } from 'react-router-dom'
import Navbar from '../Components/Navbar'
const Mobile = () => {
  return (
    <> 
    <Navbar/>
    <div className='page-section'>
      {mobileData.map((item)=>{
   return(
    <div>
      <Link to={`/mobiles/${item.id}`}>
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

export default Mobile
