
import React from 'react'

import { Link } from 'react-router-dom'

import landing_img from '../assets/bgfd.png'
import shap_img from '../assets/sh.png'
import service1 from '../assets/salad.jpg'
import service2 from '../assets/pizza.jpg'
import service3 from '../assets/butter-chicken.jpg'
import service4 from '../assets/tikka.jpg'


import { ChefHat } from 'lucide-react'

const Landing = () => {
  return (
    <div className='main min-vh-100 ' style={{paddingRight:'0px', paddingLeft:'120px',position: "relative"}}>
       
      
          <div className='d-flex justify-content-between align-items-center'>
              <div className='header mb-5 d-flex flex-column justify-content-center' style={{ flex: "1", paddingRight: "2rem",  marginTop:'20px' }}>
              <ChefHat className="mb-5" style={{ width: '64px', height: '64px',color:'rgb(237, 140, 31)' }} />
                 <h1 style={{fontSize:'2rem', fontWeight:'bold'}}>Recipe Master</h1>
                 <p style={{fontSize:'1rem', color:'#666', margin:'1rem 0'}}>Discover your ultimate recipe management solution! Effortlessly create, organize, and explore amazing recipes all in one place. Whether you're a seasoned chef or a kitchen novice, streamline your cooking journey with tools to save favorites, plan meals, and unleash your culinary creativity. Cooking made simple and enjoyable!</p> 
                 <Link to={'/home'} className='btn' style={{backgroundColor:'rgb(237, 140, 31)',marginTop:'20px', padding:'0.55rem 2rem', color:'white', fontSize:'1rem', fontWeight:'bold', cursor:'pointer', transition:'background-color 0.3s ease',width: "fit-content"}}>Get Started</Link>

                   <div style={{marginTop:'100px'}}>
                      <h5 style={{fontSize:'15px'}}>Popuplar searches</h5>

                      <div  className='mt-3 d-flex align-items-center' style={{gap: '20px'}}>
                        <button className='btn rounded p-2' style={{backgroundColor:'rgb(224, 187, 145)', fontSize: '0.8rem',padding: '0.3rem 0.8rem',display: 'flex',alignItems: 'center',gap: '0.5rem'}}><img src={service1} className='img-fluid' style={{width:'16px',height:'16px',borderRadius:'50%'}} alt="" /> Taco salad</button>

                        <button className='btn rounded p-2' style={{backgroundColor:'rgb(191, 232, 157)', fontSize: '0.8rem',padding: '0.3rem 0. 8rem',display: 'flex',alignItems: 'center',gap: '0.5rem'}}><img src={service2} className='img-fluid' style={{width:'16px',height:'16px',borderRadius:'50%'}} alt="" />Pepperoni Pizza</button>

                        <button className='btn rounded p-2' style={{backgroundColor:'rgb(225, 160, 210)', fontSize: '0.8rem',padding: '0.3rem 0.8rem',display: 'flex',alignItems: 'center',gap: '0.5rem'}}><img src={service3} className='img-fluid' style={{width:'16px',height:'16px',borderRadius:'50%'}} alt="" />Butter Chicken</button>

                       <button className='btn rounded p-2' style={{backgroundColor:'rgb(179, 207, 214)', fontSize: '0.8rem',padding: '0.3rem 0.8rem',display: 'flex',alignItems: 'center',gap: '0.5rem'}}><img src={service4} className='img-fluid' style={{width:'16px',height:'16px',borderRadius:'50%'}} alt="" /> Tikka Masala chicken</button>
                      </div>

                    </div>
              </div>
  
              <div className='img d-flex justify-content-center align-items-center' style={{height:'100vh',flex: "1",position: "relative", overflow: "hidden"}}>
               
               <img src={landing_img} className='img-fluid' style={{ width:'100%', height:'auto',position: "relative", zIndex: "2", marginTop:'50px'}} alt="" />
              </div>
          </div>
           
         
    </div>
  )
}

export default Landing