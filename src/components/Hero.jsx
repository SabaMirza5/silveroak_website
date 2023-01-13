import React from 'react'
import Vector1 from '../img/Vector1.png'



function Hero (){
  return (
  <>
  <section className="hero_section">
  <div className="container-fluid">
    <div className="row">
            <div className="col-md-6 mt-5">
                    <h1 className="display-2 mt-5">Welcome to<br /> <span className="main-hero-heading">Silver Oak Nursing</span> </h1>
                    <h3 className="main-hero-sb-heading">Creating New Perspective To Care</h3>
                      <p className="main-hero-para">Nursing And Rehabilitation Center</p>
                  <div className="button">
                    <form className="d-flex">
                        <button className="btn text-white mt-5" type="submit">Our Services</button>
                    </form>
                  </div>
            </div>
              <div className="col-md-6 ">
                <img src={Vector1} alt="image here"  className="img img-fluid"/>
              </div>
    </div>
</div>
</section>
    </>
  )
}
export default Hero