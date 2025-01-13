
import React from 'react';
import { Link } from 'react-router-dom';

import landing_img from '../assets/bgfd.png';
import service1 from '../assets/salad.jpg';
import service2 from '../assets/pizza.jpg';
import service3 from '../assets/butter-chicken.jpg';
import service4 from '../assets/tikka.jpg';
import '../App.css'

import { ChefHat } from 'lucide-react';

const Landing = () => {
  return (
   <>
     
     <div style={{minHeight:'100vh'}} className='d-flex justify-content-center align-items-center rounded shadow w-100'>
        <div className='container'>
           <div className='row align-items-center'>
            <div className='col-lg-6 col-md-6 col-12 text-center text-md-start' >
            <ChefHat className="mb-2" style={{ width: '64px', height: '64px', color: 'rgb(237, 140, 31)', }}/>
              <h1 className='mb-4' style={{fontSize:'2rem',fontWeight: 'bold'}}>Recipe Master</h1>
              <p className='mb-4' style={{textAlign:'justify'}}>Discover your ultimate recipe management solution! Effortlessly create,
                 organize, and explore amazing recipes all in one place. Whether you're a
                  seasoned chef or a kitchen novice, streamline your cooking journey with
                  tools to save favorites, plan meals, and unleash your culinary creativity.
                  Cooking made simple and enjoyable!</p>
              <Link to={'/home'} className="btn" style={{ backgroundColor: 'rgb(237, 140, 31)', marginTop: '15px', padding: '0.55rem 2rem', color: 'white',
        fontSize: '1rem',fontWeight: 'bold',cursor: 'pointer', transition: 'background-color 0.3s ease', width: 'fit-content',}}> Get Started</Link>
            </div>

          <div className="col-lg-6 col-md-6 d-none d-md-block ">
              <img className="img-fluid" src={landing_img} alt="landing" style={{ marginTop: '50px', float: 'right' }}/>
          </div>



           </div>
           <div className='popular mt-2'>
          <h5 style={{ fontSize: '1rem', }} className='pb-3'>Popular Searches</h5>

          <div  className=" d-flex flex-wrap align-items-center justify-content-start"  style={{ gap: '10px' }}>
            <button className="btn rounded p-2" style={{  backgroundColor: 'rgb(224, 187, 145)', fontSize: '0.8rem', padding: '0.3rem 0.8rem', display: 'flex',alignItems: 'center',gap: '0.5rem', }}>
              <img src={service1}  className="img-fluid" style={{ width: '16px', height: '16px', borderRadius: '50%' }} alt=""/>{' '}
              Taco Salad
            </button>

            <button className="btn rounded p-2" style={{backgroundColor: 'rgb(191, 232, 157)',fontSize: '0.8rem', padding: '0.3rem 0.8rem',
                display: 'flex',alignItems: 'center', gap: '0.5rem', }}>
              <img src={service2} className="img-fluid" style={{ width: '16px', height: '16px', borderRadius: '50%' }} alt=""/>{' '}
              Pepperoni Pizza
            </button>

            <button className="btn rounded p-2" style={{backgroundColor: 'rgb(225, 160, 210)', fontSize: '0.8rem', padding: '0.3rem 0.8rem', display: 'flex', alignItems: 'center', gap: '0.5rem', }} >
              <img src={service3} className="img-fluid" style={{ width: '16px', height: '16px', borderRadius: '50%' }}  alt=""/>{' '}
              Butter Chicken
            </button>

            <button className="btn rounded p-2" style={{backgroundColor: 'rgb(179, 207, 214)',  fontSize: '0.8rem',  padding: '0.3rem 0.8rem', display: 'flex',alignItems: 'center',gap: '0.5rem', }}>
              <img src={service4} className="img-fluid" style={{ width: '16px', height: '16px', borderRadius: '50%' }} alt=""/>{' '} Tikka Masala Chicken
            </button>
          </div>
        </div>  
        </div>

    </div>
    




      
   </>
  );
};

export default Landing;
