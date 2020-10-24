import React from "react";
import fbImage from "../Assets/icon-facebook.svg";
import twitterImage from "../Assets/icon-twitter.svg";
import pinterestImage from "../Assets/icon-pinterest.svg";
import instaImage from "../Assets/icon-instagram.svg";

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
					<img className='socialicon' src={fbImage} alt='fb' />
					<img className='socialicon' src={twitterImage} alt='twitter' />
					<img className='socialicon' src={pinterestImage} alt='pinterest' />
					<img className='socialicon' src={instaImage} alt='instagram' />
				</div>
			</div>
		</div>
	);
};

export default Footer;
