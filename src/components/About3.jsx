import React from 'react'
import aboutlogo1 from '../img/aboutlogo1.png'
import aboutlogo2 from '../img/aboutlogo2.png'
import aboutlogo3 from '../img/aboutlogo3.png'
import aboutlogo4 from '../img/aboutlogo4.png'
import aboutlogo5 from '../img/aboutlogo5.png'
function About3() {
  return (
    <>
      <div className="container pt-5">
        <div className="row align-items-center d-flex justify-content-center">
        <h1 className="heading_about text-center">CORE VALUES</h1>
            <p className="pera_about1 text-center">IVY HEALTHCARE</p>
            <div className="col-md-2">
                <img src={aboutlogo1} alt="" className="img img-fluid " />
                <h1 className="heading-about2">communication</h1>
                <p className="pera_about2">Consistent, honest, and transparent communication
                    with our residents, families, and staff.
                    allows us to know where we are excelling and where we can improve for better outcomes.</p>
            </div>
            <div className="col-md-2">
                <img src={aboutlogo2} alt="" className="img img-fluid  " />
                <h1 className="heading-about2">accountability</h1>
                <p className="pera_about2">ivy employees make a personal decision to take
                    ownership of outcomes. creating an environment of
                    accountability not only helps achieve our goals but
                    also result in in increased employee performance and
                    better outcomes for our residents.
                </p>
            </div>
            <div className="col-md-2">
                <img src={aboutlogo3} alt="" className="img img-fluid " />
                <h1 className="heading-about2">respect</h1>
                <p className="pera_about2">respect is at the foundation of teamwork. being
                    considerate, showing positive actions to our team,
                    and elevating one another through kindness.
                    remember; Teamwork makes the dream work".</p>
                                </div>
            <div className="col-md-2">
                <img src={aboutlogo4} alt="" className="img img-fluid" />
                <h1 className="heading-about2">excellence</h1>
                <p className="pera_about2">employees at ivy focus on making everyday a success.
                    by working had, staying focused, and being a 
                    positive, we can continue to yield the best result for
                    out residents and staff.</p>
                                </div>
            <div className="col-md-2">
                <img src={aboutlogo5} alt="" className="img img-fluid " />
                <h1 className="heading-about2">solutions</h1>
                <p className="pera_about2">we are committed to being a solutions based company.
                    by focusing on our mission, we strive to find solutions
                    that positively impact our residents, staff and families. ivy
                    employees Are committed to finding the solution!</p>
            </div>
      </div>
      </div>



    </>
  )
}

export default About3
