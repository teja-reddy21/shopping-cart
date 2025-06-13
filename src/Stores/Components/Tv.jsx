import React from 'react'
import { tvData } from '../Data/tv'
const Tv = () => {
     const firstFiveImages=tvData.slice(0,5)
  return (
    <>
       <div className="proTile">
    <h2>Tv</h2>
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

export default Tv
