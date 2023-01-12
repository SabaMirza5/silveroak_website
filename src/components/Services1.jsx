import React from 'react'
import serviceimg from '../img/serviceimg.png'

function Services1() {
  return (
    <>
       <section>
        <div className="container-fluid">
            <div className="row">
                <div className="col-12 col-lg-12 Services-main-img d-flex">
                     <img src={serviceimg} alt="image here" className="img-fluid" />
                </div>
            </div>
        </div>
      </section>
    </>
  )
}

export default Services1
