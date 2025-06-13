import React from 'react'
import { acData } from '../Data/ac'
const Ac = () => {
    const firstFiveImages=acData.slice(0,5)
  return (
     <>
     <div className="proTile">
   <h2>Air Cooler AC</h2>
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

export default Ac
