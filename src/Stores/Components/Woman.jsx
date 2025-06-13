import React from 'react'
import { womanData } from '../Data/woman'
const Woman = () => {
    const firstFiveImages=womanData.slice(0,5)
  return (
     <>
       <div className="proTile">
    <h2>ladys</h2>
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

export default Woman
