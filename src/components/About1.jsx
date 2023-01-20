import React from 'react'
import About2 from '../img/About2.png'
import About3 from '../img/About3.png'
import About4 from '../img/About4.png'

function About1() {
  return (
    <>
      <section  className="main-section hero_section">
        <div className="container ">
            <div className="row py-5 align-items-center">
                <div className="col-md-6 ps-5 main-left-heading  d-flex justify-content-center flex-column align-items-start">
                <h1 className="heading_2">Dedicated To Your Recovery</h1>
                <p  className="mt-3 text-left pera_about3">Our therapy professionals develop custom
                <br classname="d-none d-md-block"></br>
                treatment plans for each resident they are serving.
                <br classname="d-none d-md-block"></br>
                Those requiring short-term rehabilitation can
                <br classname="d-none d-md-block"></br>
                 utilize our private suites as they recover.
                </p>
                {/* <form className="d-flex"> */}
                <button className="btn mt-5  my-3 my-md-5" type="submit">Contact Us</button>
                {/* </form> */}
                </div>
                <div className="col-md-2 ">
                  <img src={About2} alt="image here" className=" img img-fluid" />
                  </div>
                  <div className="col-md-2 mb-5 pic">
                   <img src={About3} alt="image here" className=" img img-fluid mt-4 mt-md-0" />
                  </div>
                  <div className="col-md-2">
                  <img src={About4} alt="image here" className=" img img-fluid" />
                  </div>
            </div>
        </div>
      </section>
    {/* <section className="hero_section mt-5">
    <div className="container mt-5">
        <div className="row">
       <div className="col-md-6 justify-content-start">
           <h1 className="heading_2 mt-5">Dedicated To Your Recovery</h1>
           <p className="pera_about3 mt-4">Our therapy professionals develop custom
                treatment plans for each resident they are serving.
                Those requiring short-term rehabilitation can
                utilize our private suites as they recover.</p>
                <button className="btn d-inline text-white mt-5">Read more</button>
        </div>
        <div className="col-md-6 d-flex mt-3">
          <div className="mt-5">
            <img src={About2} alt="image here" className="img img-fluid w-120 h-100"/>
          </div>
          <div className="px-1 pb-3 mb-5">
              <img src={About3} alt="image here" className="img img-fluid w-120 h-100"/>
          </div>
          <div className="mt-5">
              <img src={About4} alt="image here" className="img img-fluid w-120 h-100"/>
          </div>
        </div>
      </div>
    </div>
    </section> */}
    </>
  )
}

export default About1
