import React from 'react'
import { mobileData } from '../Data/mobiles'
const Mobiles = () => {
    const firstFiveImages=mobileData.slice(0,5)
  return (
    <>
      <div className="proTile">
    <h2>Moblies</h2>
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

export default Mobiles
