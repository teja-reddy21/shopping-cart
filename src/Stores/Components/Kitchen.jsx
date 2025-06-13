import React from 'react'
import { kitchenData } from '../Data/kitchen'
const Kitchen = () => {
     const firstFiveImages=kitchenData.slice(0,5)
  return (
     <>
       <div className="proTile">
    <h2>Kitchen</h2>
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

export default Kitchen
