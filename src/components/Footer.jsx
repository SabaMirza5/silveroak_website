import React from "react";
import image_42 from'../img/image_42.png'
import facebook from'../img/facebook.png'
import twitter from'../img/twitter.png'
import instagrame from'../img/instagrame.png'
const Footer = () => {

return (
	<>
	<section className="footer">
	<div className="container ">
		<div className="row ">
		<div className="col-md-4">
			<div className="footer-image p-5">
			<img src={image_42} className="mx-auto d-block img-fluid" alt="image here"  />
			</div>
		</div>
		<div className="col-md-4 d-block text-white ">
			<h3 className="heading_footer pt-4">Quick Links</h3>
			<div><a href="#">Home</a></div>
			<div><a href="#">Services</a></div>
			<div><a href="#">Amenities</a></div>
			<div><a href="#">Locations</a></div>
			<div><a href="#">Careers</a></div>
		</div>
		<div className="col-md-4 text-white">
			<h3 className="heading_footer pt-4">Contact Us</h3>
			<div><a href="#">Phone</a></div>
			<div><span>+1 (319) 377-7363</span></div>
			<div><a href="#">Email</a></div>
			<div><a href="#">info@ivyhealthcaregroup.com</a></div>
			<div><a href="#">Follow us on:</a>
			<div className="pb-4 d-flex">
			   <span className="image-fluid me-2"><a href="#" > <img src={twitter} alt="image here" /> </a></span>
			   <span className="image-fluid me-2"><a href="#" > <img src={facebook} alt="image here" /> </a></span>
			   <span className="image-fluid me-2"><a href="#" > <img src={instagrame} alt="image here" /> </a></span>
			</div> </div>
		</div>
		</div>
		</div>
		</section>
		<div className=" my-4 text-center">
			<h6>© 2021 ivyhealthcaregroup. All Rights Reserved</h6>
		</div>
		
			
	</>
);
};
export default Footer;
