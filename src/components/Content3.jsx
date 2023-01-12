import React from 'react'
import facebook_iamge from "../img/facebook_iamge.png"
import image_3 from "../img/image_3.png"

function Content3() {
  return (
    <>
    <div className="container mt-5">
       <div className="row text-center ">
        <h1 className="heading_2 pb-5">Check Us Out On Facebook and<a href="" className="link"> Drop Us A Like!</a></h1>
       <div className="col-md-7">
        <img src={image_3} alt="image here" className="img img-fluid"/>
       </div>
       <div className="col-md-5">
        <img src={facebook_iamge} alt="image here" className="img img-fluid"/>
       </div>
      </div>
      <div className="row m-5 text-center">
          <div className="col-md-10">
             <h1 className="heading_2">Call Our Friendly Admissions Team Today!</h1>
          </div>
          <div className="col-md-2 mt-2 text-center"> <button className="btn text-white">Call Us Today</button> </div>
      </div>
    </div>
    </>
  )
}

export default Content3
