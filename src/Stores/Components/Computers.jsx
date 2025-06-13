import React from 'react'
import { computerData } from '../Data/computers'
const Computers = () => {
      const firstFiveImages=computerData.slice(0,5)
  return (
   <>
    <div className="proTile">
   <h2>Laptops</h2>
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

export default Computers
