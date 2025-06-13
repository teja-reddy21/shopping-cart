import React from 'react'
import Navbar from '../Components/Navbar'
import { acData } from '../Data/ac'
const AcPage = () => {
  return (
    <>
    <Navbar/>
      <div className='page-section'>
          {acData.map((item)=>{
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

export default AcPage
