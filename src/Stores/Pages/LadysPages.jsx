import React from 'react'
import Navbar from '../Components/Navbar'
import { womanData } from '../Data/woman'
const LadysPages = () => {
  return (
   <>
  <Navbar/>
   <div className='page-section'>
        {womanData.map((item)=>{
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

export default LadysPages
