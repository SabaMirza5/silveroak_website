import React from 'react'
import emp1 from '../img/emp1.png'

function Employement1() {
  return (
    <>
    <div className="container-fluid">
       <div className="row">
            <div className="col-md-12">
              <img src={emp1} alt=" About image" className="img img-fluid"/>
            </div>     
        </div>
        <div className="row mb-5 mt-5 text-center  justify-content-center">
          <div className="col-md-10">
              <h1 className="emp_heading1 mt-5 text-center">Do You Want to Work Somewherebr<br/><span className="main-color">Meaningful? </span><button className="btn text-white">CURRENT OPENINGS</button></h1>

          </div>
      </div>
    </div>
    </>
  )
}

export default Employement1
