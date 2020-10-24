import React from "react";
import workingImage from "../Assets/illustration-working.svg";

const Intro = () => {
	return (
		<div className='intro'>
			<div className='intro__text'>
				<h1 className='intro__title'>More than just shorter links</h1>
				<p className='intro__info'>
					Build your brand's recognition and get detailed insights on how your
					links are performing.
				</p>
				<h4 className='btn'>Get Started</h4>
			</div>
			<img className='intro__image' src={workingImage} alt='working' />
		</div>
	);
};

export default Intro;
