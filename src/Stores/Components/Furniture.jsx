import React from 'react'
import { furnitureData } from '../Data/furniture'
const Furniture = () => {
     const firstFiveImages=furnitureData.slice(0,5)
  return (
     <>
       <div className="proTile">
    <h2>Furniture</h2>
    </div>
    <div className='pro-section'>
      {
        firstFiveImages.map((item)=>{
          return(
        <div className='imgbox'>
            <img src={item.image} alt='' className='proImg'/>
        </div>
          )
        })
      }
    </div>
    </>
  )
}

export default Furniture
