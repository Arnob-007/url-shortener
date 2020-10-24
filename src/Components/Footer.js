import React from "react";

const Footer = () => {
	return (
		<div className='footer'>
			<div className='upfooter'>
				<h1>Boost your links today</h1>
				<h4 className='btn'>Get Started</h4>
			</div>
			<div className='ftrinfo'>
				<h1 className='ftrsection'>Shortly</h1>
				<div className='ftrsection'>
					<h5>Features</h5>
					<ul>
						<li>Link Shortening</li>
						<li>Branded Links</li>
						<li>Analytics</li>
					</ul>
				</div>
				<div className='ftrsection'>
					<h5>Resources</h5>
					<ul>
						<li>Blog</li>
						<li>Developers</li>
						<li>Support</li>
					</ul>
				</div>
				<div className='ftrsection'>
					<h5>Company</h5>
					<ul>
						<li>About</li>
						<li>Our Team</li>
						<li>Careers</li>
						<li>Contact</li>
					</ul>
				</div>
				<div className='ftrsection'>
					<img
						className='socialicon'
						src={require("../Assets/icon-facebook.svg")}
						alt='fb'
					/>
					<img
						className='socialicon'
						src={require("../Assets/icon-twitter.svg")}
						alt='twitter'
					/>
					<img
						className='socialicon'
						src={require("../Assets/icon-pinterest.svg")}
						alt='pinterest'
					/>
					<img
						className='socialicon'
						src={require("../Assets/icon-instagram.svg")}
						alt='instagram'
					/>
				</div>
			</div>
		</div>
	);
};

export default Footer;
