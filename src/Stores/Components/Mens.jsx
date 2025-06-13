import React from 'react'
import { menData } from '../Data/mens'
const Mens = () => {
     const firstFiveImages=menData.slice(0,5)
  return (
    <>
         <div className="proTile">
    <h2>Mens</h2>
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

export default Mens
