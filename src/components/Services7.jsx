import React from 'react'
import serviceimg5 from '../img/serviceimg5.png'
import serviceimg6 from '../img/serviceimg6.png'
import servicesimg7 from '../img/servicesimg7.png'

function Services7() {
  return (
    <>
    <div className="container mt-5">
        <div className="row py-5 justify-content-center">
            <div className="col-md-6 col-lg-4">
                <div className="card hero_section">
                    <img src={serviceimg5} alt="img here" className="card-img-top" />
                    <div className="card-body text-center">
                        <h5 className="card-title">Quality<br/><span className='main-color'>CARE</span></h5>
                        <p className="card-text">Whether you’re coming for short-term rehab, or a longer stay, moving into a nursing home can be a big adjustment. Here at the Ivy silver oak, because we understand how you feel, we treat you like family.</p>
                    </div>
                </div>
            </div>
            <div className="col-md-6 col-lg-4">
                <div className="card hero_section">
                    <img src={serviceimg6} alt="img here" className="card-img-top" />
                    <div className="card-body text-center">
                        <h5 className="card-title">CUTTING<br/><span className='main-color'>EDGE THERAPY</span></h5>
                        <p className="card-text">Enjoy the latest, high-tech therapy techniques at Ivy Healthcare. Our facility offers “Restore Skills” therapy – a suite of interactive therapeutic video games for patients to do with their therapist.</p>
                    </div>
                </div>
            </div>
            <div className="col-md-6 col-lg-4 mt-0 mt-md-5 mt-lg-0">
                <div className="card hero_section">
                    <img src={servicesimg7} alt="img here" className="card-img-top" />
                    <div className="card-body text-center">
                        <h5 className="card-title">CLINICAL<br/><span className='main-color'>SERVICES</span></h5>
                        <p className="card-text">When you check in at the Ivy, our dedicated clinical staff develops a customized care plan based on your individual needs. We work towards, giving you all the treatment you need to recover as soon as possible.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
        {/* <div className="container mt-5">
            <div className="row hero_section py-5 justify-content-center">
            <div className="col-md-6 col-lg-4">
                <img src={serviceimg5} alt="image here" className="img img-fluid" />
                <h1 className="service7-heading">QUALITY <br /><span className="service7-heading1">CARE </span></h1>
                <p className="service7-para">Whether you’re coming for short-term rehab, or a longer stay, moving into a nursing home can be a big adjustment. Here at the Ivy silver oak, because we understand how you feel, we treat you like family.</p>
            </div>
            <div className="col-md-4">
                <img src={serviceimg6} alt="image here" className="img img-fluid" />
                <h1 className="service7-heading">CUTTING EDGE <span className="service7-heading1">THERAPY</span></h1>
                <p className="service7-para">Enjoy the latest, high-tech therapy techniques at Ivy Healthcare. Our facility offers “Restore Skills” therapy – a suite of interactive therapeutic video games for patients to do with their therapist.</p>
            </div>
            <div className="col-md-4 ">
                <img src={servicesimg7} alt="image here" className="img img-fluid" />
                <h1 className="service7-heading">CLINICAL <br /><span className="service7-heading1">SERVICES</span></h1>
                <p className="service7-para">When you check in at the Ivy, our dedicated clinical staff develops a customized care plan based on your individual needs. We work towards getting home from day one, giving you all the treatment you need to recover as soon as possible.</p>
            </div>
        </div>
        </div> */}

        </>
      
  )
}

export default Services7
