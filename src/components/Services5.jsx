import React from 'react'
import Line from '../img/Line.png'
import servicesimg8 from '../img/servicesimg8.png'

function Services5() {
  return (
    <>
    <section>
        <div className="container">
    <div className="row mt-5">
       <div className="col-md-4">
          <img src={servicesimg8} alt="" className="img-fluid" />
       </div>
       <div className="col-md-8">
        <h2 className="service5-heading text-center">
        OUR REHAB PROGRAM <span className="service5-heading1">OFFERS</span>
        </h2>
        <div className="row mx-5">
            <div className="col-md-6 ">
            <ul className="list-unstyled">
                                <li className="list1"><img src={Line} alt=""  className="img-fluid mx-2" />
                                <b>Physical, Occupational, & Speech Therapy Up to 7 Days a Week</b>
                                </li>
                                <li className="list1"><img src={Line} alt=""  className="img-fluid mx-2" />
                                <b>Cutting-Edge Techniques & Modalities</b>
                               </li>
                                <li className="list1"><img src={Line} alt=""  className="img-fluid mx-2" />
                                <b>Comprehensive Discharge Planning</b>
                                </li>
                    </ul>
            </div>
            <div className="col-md-6 ">
          <ul className="list-unstyled">
                              <li className="list1"><img src={Line} alt=""  className="img-fluid mx-2" />
                              <b>Highly Trained Rehabilitation Staff</b>
                              </li>
                              <li className="list1"><img src={Line} alt=""  className="img-fluid mx-2" />
                              <b>Multidisciplinary Approach</b>
                              </li>
                              <li className="list1"><img src={Line} alt=""  className="img-fluid mx-2" />
                              <b>Post-Discharge Follow-up Care</b>
                              </li>
                             
                  </ul>
          </div>
        </div>
       </div>
    </div>
        </div>
      </section>
      
    </>
  )
}

export default Services5
