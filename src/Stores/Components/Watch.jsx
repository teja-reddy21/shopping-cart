import React from 'react'
import { watchData } from '../Data/watch'
const Watch = () => {
     const firstFiveImages=watchData.slice(0,5)
  return (
      <>
      <div className="proTile">
    <h2>Watch</h2>
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

export default Watch
