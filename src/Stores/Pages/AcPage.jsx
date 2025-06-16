import React from 'react'
import Navbar from '../Components/Navbar'
import { acData } from '../Data/ac'
import { Link } from 'react-router-dom'
const AcPage = () => {
  return (
    <>
    <Navbar/>
      <div className='page-section'>
          {acData.map((item)=>{
       return(
        <div>
          <Link to={`/ac/${item.id}`}>
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

export default AcPage
