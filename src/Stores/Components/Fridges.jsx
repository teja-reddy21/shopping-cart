import React from 'react'
import { fridgeData } from '../Data/fridge'

const Fridges = () => {
     const firstFiveImages=fridgeData.slice(0,5)
  return (
     <>
        <div className="proTile">
   <h2>Fridge</h2>
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

export default Fridges
