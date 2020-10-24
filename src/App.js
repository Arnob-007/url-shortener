import React from "react";
import Footer from "./Components/Footer";
import Intro from "./Components/Intro";
import Navbar from "./Components/Navbar";
import Shorten from "./Components/Shorten";
import Stats from "./Components/Stats";
import "./Main.css";

const App = () => {
	return (
		<div className='app'>
			<Navbar />
			<Intro />
			<Shorten />
			<Stats />
			<Footer />
		</div>
	);
};

export default App;
