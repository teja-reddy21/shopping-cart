import React from 'react'
import Navbar from '../Components/Navbar'
import { furnitureData } from '../Data/furniture'
import { Link } from 'react-router-dom'
const FurniturePage = () => {
  return (
  <>
  <Navbar/>
   <div className='page-section'>
        {furnitureData.map((item)=>{
     return(
      <div>
        <Link  to={`/furniture/${item.id}`}>
          <div className='pageImg'>
              <img src={item.image} alt=''/>
          </div>
          </Link>
          <div className="pro-model">
              {item.company},{item.model}
          </div>
          </div>
     )
        })}
      </div>
  </>
  )
}

export default FurniturePage
