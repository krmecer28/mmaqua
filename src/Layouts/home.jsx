import React from 'react';
import Navbar from '../Components/Navbar';
import '../styles/layout-styles/home.css';

const Home = () => {
  return (
    <div style={{backgroundColor: "#025370"}}>
      <Navbar/>
      <div className='hero'>
        <div className='jumbotron-container'>
            <div className="jumbotron">
                <h5 style={{textAlign: "center"}} class="display-4">Example Text Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, similique!</h5>
                <br />
                <a class="btn btn-primary btn-lg" href="#" role="button">Shop Now</a>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Home;