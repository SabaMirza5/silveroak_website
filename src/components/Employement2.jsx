import React from 'react'
import emp_logo from '../img/emp_logo.png'

function Employement2() {
  return (
    <>
     <div className="container">
        <div className="row empl-head1 align-items-center mt-5">
            <div className="col-md-3"></div>
          <div className= "col-md-8 col-lg-5 d-flex flex-column flex-md-row justify-content-center justify-content-md-center text-center text-md-start">
            <h1 className="heading_2">JOIN</h1>
            <p>our wonderful team of caregivers on  <br /> our mission a </p>
            </div>
            <div className="col-md-4"></div>
            </div>
          <div className="row empl-head2 align-items-center mt-5">
            <div className="col-md-3"></div>
            <div className="col-md-12 col-lg-6 d-flex flex-column flex-md-row justify-content-center justify-content-md-center text-center text-md-start">
            <h1 className="heading_2">DELIVERING</h1>
            <p>excellent care, and quality of life to our<br />current and future Residents</p>
            </div>
            <div className="col-md-3"></div>
          </div>
      <div className="row d-flex justify-content-center">
        <div className="col-md-12 text-center">
            <img src={emp_logo} alt="" className="img img-fluid" />
        </div>
      </div>
    </div>
    {/* <div className="container">
        <div className="row">
            <div className="col-md-2"></div>
        <div className="col-md-7">
          <div className="row pt-5">
            <div className="col-md-2  d-flex ">
            <h1 className="heading_2 justify-content-start d-flex">JOIN</h1>
            </div>
            <div className="col-md-10  d-flex">
            <p className="emp_pera">our wonderful team of caregivers on  <br /> our mission a </p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-2 d-flex">
            <h1 className="heading_2 justify-content-start d-flex ">DELIVERING</h1>
            </div>
            <div className="col-md-10 d-flex">
            <p className="emp_pera2 ">excellent care, and quality of life to our<br />current and future Residents</p>
            </div>
          </div>
            
            
        </div>
        <div className="col-md-3"></div>
      </div>
      <div className="row d-flex justify-content-center">
        <div className="col-md-12 text-center">
            <img src={emp_logo} alt="" className="img img-fluid" />
        </div>
       
      </div>
    </div> */}
      
    </>
  )
}

export default Employement2
