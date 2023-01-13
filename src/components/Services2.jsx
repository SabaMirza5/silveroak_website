import React from 'react'
import Line from  '../img/Line.png';
import servicesimg2 from '../img/servicesimg2.png';
import servicesimg3 from '../img/servicesimg3.png';
import servicesimg4 from '../img/servicesimg4.png';

function Weoffer() {
  return (
    <>
      <section className="hero_section">
        <div className="container mt-5 pt-5">
                         <h1 className="heading_about text-center">At Sliver Oak We Offer</h1>
                <div className="row mt-5">
                    <div className="col-md-4">
                    <ul className="list-unstyled">
                                <li  className="list"><img src={Line} alt=""  className="img-fluid mx-1 " />24-Hour Skilled Nursing Care</li>
                                <li  className="list"><img src={Line} alt=""  className="img-fluid mx-1 " />Physical, Occupational, & Speech Therapies</li>
                                <li  className="list"><img src={Line} alt=""  className="img-fluid mx-1 " />Post Acute Care</li>
                                <li  className="list"><img src={Line} alt=""  className="img-fluid mx-1 " />Post Acute Care</li>
                                <li  className="list"><img src={Line} alt=""  className="img-fluid mx-1 " />Stroke & Neurological Conditions</li>
                                <li  className="list"><img src={Line} alt=""  className="img-fluid mx-1 " />Cardiac Care</li>
                                <li  className="list"><img src={Line} alt=""  className="img-fluid mx-1 " />Dementia Care</li>
                                <li  className="list"><img src={Line} alt=""  className="img-fluid mx-1 " />Respite Care</li>
                                <li  className="list"><img src={Line} alt=""  className="img-fluid mx-1 " />COPD</li>
                                <li  className="list"><img src={Line} alt=""  className="img-fluid mx-1 " />Hospice care</li>
                                <li  className="list"><img src={Line} alt=""  className="img-fluid mx-1 " />IV Therapy for Antibiotics</li>
                    </ul>
                    </div>
                    <div className="col-md-3">
                    <ul className="list-unstyled">
                                <li className="list"><img src={Line} alt=""  className="img-fluid mx-1" />Bariatric Care</li>
                                <li className="list"><img src={Line} alt=""  className="img-fluid mx-1" />Diabetic Care</li>
                                <li className="list"><img src={Line} alt=""  className="img-fluid mx-1" />Restorative Therapy</li>
                                <li className="list"><img src={Line} alt=""  className="img-fluid mx-1" />Pain Management</li>
                                <li className="list"><img src={Line} alt=""  className="img-fluid mx-1" />Complex Medical Care</li>
                                <li className="list"><img src={Line} alt=""  className="img-fluid mx-1" />Therapeutic Recreation</li>
                                <li className="list"><img src={Line} alt=""  className="img-fluid mx-1" />Transport to Appointments</li>
                                <li className="list"><img src={Line} alt=""  className="img-fluid mx-1" />IV Therapy for Nutrition Services</li>
                                <li className="list"><img src={Line} alt=""  className="img-fluid mx-1" />24/7 Admissions</li>
                                <li className="list"><img src={Line} alt=""  className="img-fluid mx-1" />Wound Care</li>
                                <li className="list"><img src={Line} alt=""  className="img-fluid mx-1" />Peritoneal Dialysis</li>
                    </ul>
                    </div>
                    <div className="col-md-5">
                    <div className=" mt-5 ">
                    <img src={servicesimg2} alt="image here" className=" img img-fluid  w-50 h-50" />
                  </div>
                  <div className=" my-1">
                    <img src={servicesimg3} alt="image here" className=" img img-fluid   w-50 h-50 " />
                    <img src={servicesimg4} alt="image here" className=" img img-fluid  w-50 h-50 " />
                  </div>
                    </div>
                </div>
            </div>
      </section>
    </>
  )
}
export default Weoffer