import React from 'react'

function Contact_form() {
  return (
    <>
        <section>
        <div className="container">
            <div className="row mt-5">
                <div className="col-md-12">
                    <h5 className="contact_heading1 text-center"> Want to learn more about</h5>
                    <h1 className="contact_heading2 text-center mt-3"> the silver oak</h1>
                    <p className="contact_para1 text-center mt-3">
                    Give us a call, send us an email, or fill out the contact form,
                     and we’ll get back to you as soon as possible!
                    </p>
                </div>
            </div>
                <div className="row">
                <form>
                 <div className="mb-5  ">
                    <label htmlFor="exampleInputtext1" className="form-label ">Full Name</label>
                    <input type="text" className="form-control box" id="exampleInputtext1" aria-describedby="textHelp"/>
                </div>
                <div className="mb-5 ">
                    <label htmlFor="exampleInputEmail1" className="form-label">E-Mail</label>
                    <input type="email" className="form-control  box" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                </div>
                <div className="mb-5">
                  <label htmlFor="message" className="form-label">Your message</label>
                   <textarea type="text" id="message" name="message" rows="4" className="form-control md-textarea box"></textarea>
                </div>
                </form>
                </div>
                <div className="row">
                    <div className="col-md-12  m-5 justify-content-center d-flex">
                         <button type="button" className="btn">Let's Talk</button>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Contact_form
