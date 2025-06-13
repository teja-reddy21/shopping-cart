import React from 'react'
import Navbar from '../Components/Navbar'
import { fridgeData } from '../Data/fridge'
const FridgePage = () => {
  return (
    <>
    <Navbar/>
    <div className='page-section'>
          {fridgeData.map((item)=>{
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

export default FridgePage
