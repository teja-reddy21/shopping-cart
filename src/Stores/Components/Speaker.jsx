import React from 'react'
import { speakerData } from '../Data/speaker'
const Speaker = () => {
    const firstFiveImages=speakerData.slice(0,5)
  return (
     <>
        <div className="proTile">
    <h2>sound Speakers</h2>
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

export default Speaker
