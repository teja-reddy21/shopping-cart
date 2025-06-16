import React from 'react'
import Navbar from '../Components/Navbar'
import { fridgeData } from '../Data/fridge'
import { Link } from 'react-router-dom'
const FridgePage = () => {
  return (
    <>
    <Navbar/>
    <div className='page-section'>
          {fridgeData.map((item)=>{
       return(
        <div>
          <Link to={`/fridge/${item.id}`}>
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

export default FridgePage
