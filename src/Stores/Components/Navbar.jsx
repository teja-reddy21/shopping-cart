import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <>
    <div className='navSection'>
        <div className="title">
            <h2>E-mart</h2>
        </div>
        <div className="search">
            <input type="text" placeholder='search...'/>
        </div>
      <div className="user">
        <div className="user-detail">
            SignIn/signUp
        </div>
        <div className="cart">
            Cart
        </div>
      </div>
    </div>
    <div className="subMenu">
     <ul>
        <Link to='/mobiles'>
        <li>Mobiles</li>
            </Link>
            <Link to='/laptops'>
          <li>Laptops</li>
          </Link>
          <Link to='/ac'>
            <li>air AC</li>
            </Link>
            <Link to='/books'>
           <li>Books</li>
           </Link>
           <Link to='/fridge'>
                 <li>Fridge</li>
                 </Link>
                 <Link to='/furniture'>
                   <li>Furniture</li>
                   </Link>
                   <Link to='/kitchen'>
                     <li>Kitchen</li>
                     </Link>
                     <Link to='/men'>
                       <li>Men</li>
                       </Link>
                       <Link to='/tv'>
                       <li>TV</li>
                       </Link>
                       <Link to='/watch'>
                       <li>Watches</li>
                       </Link>
                       <Link to='/ladys'>
                       <li>ladys</li>
                       </Link>
                       <Link to='/speakers'>
                       <li>Speakers</li>
                       </Link>
                   
    </ul>
    </div>
    </>
  )
}

export default Navbar
