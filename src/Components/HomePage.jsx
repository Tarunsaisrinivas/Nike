import React from 'react'
import BasicExample from './BasicExample'
import shoe from '/images/hero-image.png'
import flipkart from '/images/flipkart.png'
import amazon from '/images/amazon.png'

import '../styles/Navbar.css'
import { Button } from 'react-bootstrap'
const HomePage = () => {
  return (
    <>
    <BasicExample />
    <div className="container">
        <div className="heading">
          <h1>YOUR FEET DESERVE THE BEST</h1>
          <div className="matter">
          <p>YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR SHOES</p>
        </div>
        <div className="btn">
        <Button className='shop'>Shop Now</Button>
        <Button className='category'>Category</Button>

        </div>
          Available in:<br/>
        <div className="available">
          <img src={flipkart} alt="" />
          <img src={amazon} alt="" />
        </div>
        </div>
        <div className="image">
          <img src={shoe} alt="" style={{float:'right'}} />
        </div>
        
    </div>
      
    </>
  )
}

export default HomePage