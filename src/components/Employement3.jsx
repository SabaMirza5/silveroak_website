import React from 'react'
import emp2 from '../img/emp2.png'
import em1 from '../img/em1.png'
import em2 from '../img/em2.png'
import em3 from '../img/em3.png'
import em4 from '../img/em4.png'
import em5 from '../img/em5.png'
import em6 from '../img/em6.png'
import empusers from '../img/empusers.png'


function Employement3() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <img src={empusers} alt="" className="img img-fluid" />
          </div>
        </div>
        <div className="row">
            <div className="col-md-6">
                <h1 className="heading_2">Compitative Pay and Full Benifits Include</h1>
                <div className="row ">
                    <div className="col-md-6 mt-5">
                        <ul className="list-unstyled">
                            <li className="list"><img src={em1} alt="" className="img img-fluid mx-2" />medical</li>
                            <li className="list my-2"><img src={em2} alt="" className="img img-fluid mx-2 mt-2" />Vision</li>
                            <li className="list my-3"><img src={em3} alt="" className="img img-fluid mx-2 mt-2" />Free Life Insurance</li>
                        </ul>
                    </div>
                    <div className="col-md-6 mt-5">
                    <ul className="list-unstyled">
                            <li className="list"><img src={em4} alt="" className="img img-fluid mx-2" />medical</li>
                            <li className="list my-2"><img src={em5} alt="" className="img img-fluid mx-2 mt-2" />Vision</li>
                            <li className="list"><img src={em6} alt="" className="img img-fluid mx-2 mt-2" />Free Life Insurance</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="col-md-6 mb-5 d-flex">
                <img src={emp2} alt="img here" className="img img-fluid" />
            </div>
        </div>
        <div className="row mb-5 mt-5 mx-5">
          <div className="col-md-10">
             <h1 className="heading_2">Call Our Friendly Admissions Team Today!</h1>
          </div>
          <div className="col-md-2 mt-2"> <button className="btn text-white text-center">Call Us Today</button> </div>
      </div>
      </div>
    </>
  )
}

export default Employement3
