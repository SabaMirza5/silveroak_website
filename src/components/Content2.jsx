import React from 'react'
import image_2 from '../img/image_2.png'
import logo from '../img/logo.png'

function Content2() {
  return (
    <>
      <div className="container mt-5">
      <div className="row align-items-center">
       <div className="col-md-7">
        <img src={image_2} alt="image here" className="img img-fluid"/>
       </div>
       <div className="col-md-5 secd-sec">
        <img src={logo} alt="" className="img img-fluid"/>
        <p className="para3   text-center mt-5">Silver Oak Nursing & Rehabilitation Center is a proud member of the Marion Area Chamber of Commerce!</p>
        <div className="row">
            <div className="col-md-12 d-flex justify-content-center mt-5">
                <button className=" home_button btn d-inline text-white">Read more</button>
            </div>
        </div>
    
       </div>
      </div>
      </div>
    </>
  )
}

export default Content2
