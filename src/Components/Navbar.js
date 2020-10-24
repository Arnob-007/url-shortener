import React from "react";
import logo from "../Assets/logo.svg";

const Navbar = () => {
	return (
		<div className='nav'>
			<div className='nav__title'>
				<img src={logo} alt='logo' />
				<HamburgerIcon />
			</div>
			<NavOptions />
		</div>
	);
};

const NavOptions = () => {
	return (
		<div id='nav__options' className='mobile nav__options'>
			<div className='nav__left'>
				<h4>Features</h4>
				<h4>Pricing</h4>
				<h4>Resources</h4>
			</div>
			<div className='nav__right'>
				<h4>Login</h4>
				<h4 className='btn'>Sign Up</h4>
			</div>
		</div>
	);
};

const HamburgerIcon = () => {
	const toggle = () => {
		document.getElementById("hamburger").classList.toggle("change");
		document.getElementById("nav__options").classList.toggle("mobile");
	};
	return (
		<div id='hamburger' className='container' onClick={toggle}>
			<div className='bar1'></div>
			<div className='bar2'></div>
			<div className='bar3'></div>
		</div>
	);
};

export default Navbar;
