import React from 'react'
import Navbar from '../Components/Navbar'
import { computerData } from '../Data/computers'
const ComputerPage = () => {
  return (
    <>
    <Navbar/>
     <div className='page-section'>
          {computerData.map((item)=>{
       return(
        <div>
            <div className='pageImg'>
                <img src={item.image} alt=''/>
            </div>
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
