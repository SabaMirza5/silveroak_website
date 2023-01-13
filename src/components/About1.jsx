import React from 'react'
import About2 from '../img/About2.png'
import About3 from '../img/About3.png'
import About4 from '../img/About4.png'

function About1() {
  return (
    <>
    <section className="hero_section">
    <div className="container mt-5">
        <div className="row">
       <div className="col-md-6 justify-content-start">
           <h1 className="heading_2">Dedicated To Your Recovery</h1>
           <p className="pera_about3 mt-4">Our therapy professionals develop custom
                treatment plans for each resident they are serving.
                Those requiring short-term rehabilitation can
                utilize our private suites as they recover.</p>
                <button className="btn d-inline text-white mt-5">Read more</button>
        </div>
        <div className="col-md-6 d-flex">
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
    </section>
    </>
  )
}

export default About1
