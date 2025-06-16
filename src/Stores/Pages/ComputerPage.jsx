import React from 'react'
import Navbar from '../Components/Navbar'
import { computerData } from '../Data/computers'
import { Link } from 'react-router-dom'
const ComputerPage = () => {
  return (
    <>
    <Navbar/>
     <div className='page-section'>
          {computerData.map((item)=>{
       return(
        <div>
          <Link to={`/laptops/${item.id}`}>
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

export default ComputerPage
