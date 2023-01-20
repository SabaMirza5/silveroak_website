import React from 'react'

function Contact_form() {
  return (
    <>
        <section>
        <div className="container">
            <div className="row mt-5 justify-content-center">
                <div className="col-md-12 col-lg-8 text-center">
                    <h5 className="contact_heading1"> Want to learn more about</h5>
                    <h1 className="contact_heading2 mt-3"> the silver oak</h1>
                    <p className="contact_para1 mt-3">
                     Give us a call, send us an email, or fill out the contact form,
                     and we’ll get back to you as soon as possible!
                    </p>
                    <input type="text" className="form-control"  placeholder='Full Name'/>
                    <input type="text" className="form-control"  placeholder='E-Mail'/>
                    <textarea name="form-control" id="floatingTextarea2" className="form-control" placeholder="Leave a Comment Here">
                    </textarea>
                    <div className="row">
                        <div className="col-md-12 mt-5 text-white justify-content-center text-center d-flex">
                        <button className="btn " type="submit">Let's Talk</button>
                        </div>
                    </div>
                    
                </div>
            </div>
                
                
    {/* <div className="row">
     <div className="col-md-12 text-center">
        <div className="responsive-map">
           <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2822.7806761080233!2d-93.29138368446431!3d44.96844997909819!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x52b32b6ee2c87c91%3A0xc20dff2748d2bd92!2sWalker+Art+Center!5e0!3m2!1sen!2sus!4v1514524647889" width="600" height="450" frameborder="0"  allowfullscreen></iframe>
         </div>
     </div>
    </div> */}
        </div>
        </section>
    </>
  )
}

export default Contact_form
