import React from 'react'
import { mobileData } from '../Data/mobiles'
import { Link } from 'react-router-dom'
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
             <Link to={`/mobiles/${item.id}`}>
        <div className='imgbox'>
            <img src={item.image} alt='' className='proImg'/>
        </div>
        </Link>
          )
        })
      }
    </div>
    </>
  )
}

export default Mobiles
