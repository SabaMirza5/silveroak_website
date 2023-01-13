import React from 'react'
import contact1logo from '../img/contact1logo.png'
import contact2logo from '../img/contact2logo.png'
import contact3logo from '../img/contact3logo.png'

function Contact_box() {
  return (
    <>
     <section>
        <div className="container mt-5">
          <div className="row text-center mb-5">
            <div className="col-md-4">
                   <a href="" className=""><img src={contact1logo} alt="" className="img-fluid" /></a>
                    <p className= "cont">5860 College Road, <br/>Key West, FL 33040</p>
            </div>
            <div className="col-md-4">
                    <a href="" className=""><img src={contact2logo} alt="" className="img-fluid" /></a>
                    <p className= "cont">info@plamvista.com</p>
            </div>
            <div className="col-md-4">
                    <a href="" className=""><img src={contact3logo} alt="" className="img-fluid" /></a>
                    <p className= "cont">+1.305.296.4888</p>
            </div>
            </div>
        </div>
      </section>
    </>
  )
}

export default Contact_box
