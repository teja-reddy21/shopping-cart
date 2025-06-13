import React from 'react'
import Navbar from '../Components/Navbar'
import { furnitureData } from '../Data/furniture'
const FurniturePage = () => {
  return (
  <>
  <Navbar/>
   <div className='page-section'>
        {furnitureData.map((item)=>{
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

export default FurniturePage
