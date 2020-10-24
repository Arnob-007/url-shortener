import React from "react";
import brandIcon from "../Assets/icon-brand-recognition.svg";
import detailedIcon from "../Assets/icon-detailed-records.svg";
import customizableIcon from "../Assets/icon-fully-customizable.svg";

const Stats = () => {
	return (
		<div className='stats'>
			<div className='stats__head'>
				<h2>Advanced Statistics</h2>
				<p>
					Track how your links are performing across the web with <br />
					our advanced statistics dashboard.
				</p>
			</div>
			<div className='stats__body'>
				<StatsCard
					title='Brand Recognition'
					info="Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instill confidence in your content."
					imageurl={brandIcon}
				/>
				<StatsCard
					title='Detailed Records'
					info='Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.'
					imageurl={detailedIcon}
				/>
				<StatsCard
					title='Fully Customizable'
					info='Improve brand awareness and content discoverabilty through customizable links, supercharging audience engagement.'
					imageurl={customizableIcon}
				/>
			</div>
		</div>
	);
};

const StatsCard = ({ title, info, imageurl }) => {
	return (
		<div className='statscard'>
			<div className='img__container'>
				<img src={imageurl} alt='icon' />
			</div>
			<h3>{title}</h3>
			<p>{info}</p>
		</div>
	);
};

export default Stats;
