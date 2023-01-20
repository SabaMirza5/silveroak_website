import React from "react";
import image_42 from'../img/image_42.png'
import facebook from'../img/facebook.png'
import twitter from'../img/twitter.png'
import instagrame from'../img/instagrame.png'

function Footer() {

return (
	<>
	<section className="footer py-5">
		<div className="container">
			<div className="row align-items-center">
				<div className="col-md-4 text-center">
				  <img src={image_42} className="mx-auto d-block img-fluid" alt="image here"  />
				</div>
				<div className="col-md-2"></div>
				<div className="col-md-2 text-center text-md-start mt-md-0">
					<ul>
						<li>
							<h3>Quick Links</h3>
						</li>
						<li>
							<a href="">Home</a>
						</li>
						<li>
							<a href="">services</a>
						</li>
						<li>
							<a href="">Amenities</a>
						</li>
						<li>
							<a href="">Location</a>
						</li>
						<li>
							<a href="">Careers</a>
						</li>
					</ul>
				</div>
				<div className="col-md-1"></div>
				<div className="col-md-3 text-center text-md-start mt-md-0 ">
					<h3 className="mt-2">Contact Us</h3>
					<h4 className="mt-3 text-white">Phone</h4>
					<p className="text-white">+1(305) 912-9260</p>
					<h4 className="text-white">Email</h4>
					<p className="text-white">info@ivyhealthcaregroup.com</p>
					<h3>Follow Us On:</h3>
					<ul className="d-flex justify-content-center justify-content-md-start mt-4">
						<li>
							<a href=""><img src={twitter} alt="image here" className=" img-fluid me-3"/></a>
						</li>
						<li>
							<a href=""><img src={facebook} alt="image here" className=" img-fluid me-3"/></a>
						</li>
						<li>
							<a href=""><img src={instagrame} alt="image here" className=" img-fluid me-3" /></a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</section>
	<div className="container-fluid cpy-rt">
		<div className="row">
			<div className="col-md-12">
				<h4>© 2021 ivyhealthcaregroup. All Rights Reserved</h4>
			</div>
		</div>
	</div>	
	</>
);
};
export default Footer
