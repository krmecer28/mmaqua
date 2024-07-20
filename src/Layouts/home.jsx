import React, { useRef } from 'react';
import Card from '../Components/Card';
import Navbar from '../Components/Navbar';
import logo from '../images/logo.jpg';
import ornekresim1 from '../images/ornekresim1.jpg';
import '../styles/layout-styles/home.css';

const Home = () => {
  const sliderRef = useRef(null);

  const handleScroll = (direction) => {
    const { current } = sliderRef;
    if (direction === 'left') {
      current.scrollLeft -= current.clientWidth / 2;
    } else {
      current.scrollLeft += current.clientWidth / 2;
    }
  };
  return (
    <div>
      <Navbar style={{backgroundColor: "#025370"}}/>
      <div className='hero'>
        <div className='jumbotron-container'>
            <div className="jumbotron">
                <h5 style={{textAlign: "center"}} class="display-4">Example Text Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, similique!</h5>
                <br />
                <a class="btn btn-primary btn-lg" href="#" role="button">Shop Now</a>
            </div>
        </div>
      </div>
      <div className='aboutus' id='aboutus' style={{backgroundColor: "white"}}>
        <div className='about-left'>
          <hr />
          <h1  id="abouth1" style={{textAlign: "center"}}>ABOUT US</h1>
          <p style={{fontSize: "20px"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus iure placeat nemo fugiat nostrum, doloremque ut illum reiciendis, natus veniam eius ab explicabo laudantium vitae. At natus officia consectetur. Consequatur, a fugiat laboriosam beatae tempora quis recusandae aut est debitis eum quos necessitatibus voluptatem suscipit! Eos accusantium distinctio ullam aut.</p>
          <img src={logo} alt="" id='about-logo'/>
        </div>
        <div className='about-right'>
          <hr />
          <img src={ornekresim1} alt="" id='about-img'/>
          <p style={{fontSize: "20px"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid eum nesciunt doloribus, nostrum rem exercitationem, at cumque corrupti id non consequatur! Ratione assumenda labore fugit illo quidem corrupti est, mollitia neque? Culpa soluta obcaecati, reiciendis consectetur dignissimos officia, eum ratione natus neque beatae nobis fugiat deleniti! Ad veritatis modi officia.</p>
        </div>
        <div className='about-right-second'>
          <br />
          <p style={{fontSize: "20px"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid eum nesciunt doloribus, nostrum rem exercitationem, at cumque corrupti id non consequatur! Ratione assumenda labore fugit illo quidem corrupti est, mollitia neque? Culpa soluta obcaecati, reiciendis consectetur dignissimos officia, eum ratione natus neque beatae nobis fugiat deleniti! Ad veritatis modi officia.</p>
          <img src={ornekresim1} alt="" id='about-img'/>
        </div>
      </div>
      <hr />
      <div className='shop' id='shop'>
      <h2 style={{textAlign: "center", fontSize: "50px", color: "#025370"}}>Our Products</h2>
      <br /><br />
      <button className='slider-button left-button' onClick={() => handleScroll('left')}>&#10094;</button>
      <div className='card-group' ref={sliderRef}>
        <Card image={logo} name="DENEME" price="1000"/>
        <Card image={logo} name="DENEME" price="1000"/>
        <Card image={logo} name="DENEME" price="1000"/>
        <Card image={logo} name="DENEME" price="1000"/>
        <Card image={logo} name="DENEME" price="1000"/>
        <Card image={logo} name="DENEME" price="1000"/>
        <Card image={logo} name="DENEME" price="1000"/>
        <Card image={logo} name="DENEME" price="1000"/>
        <Card image={logo} name="DENEME" price="1000"/>
        <Card image={logo} name="DENEME" price="1000"/>
        <Card image={logo} name="DENEME" price="1000"/>
        <Card image={logo} name="DENEME" price="1000"/>
      </div>
      <button className='slider-button right-button' onClick={() => handleScroll('right')}>&#10095;</button>
    </div>
      {/* <div className='shop' id='shop'>
        <h2>Our Products</h2>
        <div className='card-group'>
          <Card image={logo} name="DENEME" price="1000"/>
          <Card image={logo} name="DENEME" price="1000"/>
          <Card image={logo} name="DENEME" price="1000"/>
          <Card image={logo} name="DENEME" price="1000"/>
          <Card image={logo} name="DENEME" price="1000"/>
          <Card image={logo} name="DENEME" price="1000"/>
          <Card image={logo} name="DENEME" price="1000"/>
          <Card image={logo} name="DENEME" price="1000"/>
          <Card image={logo} name="DENEME" price="1000"/>
          <Card image={logo} name="DENEME" price="1000"/>
          <Card image={logo} name="DENEME" price="1000"/>
          <Card image={logo} name="DENEME" price="1000"/>
        </div>
      </div> */}
    </div>
  )
}

export default Home;