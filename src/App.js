import "./App.css";
import { useState } from "react";
import RedButton from "./Components/RedButton";
import BlueButton from "./Components/BlueButton";
import GreenButton from "./Components/GreenButton";
import ColorDisplay from "./Components/ColorDisplay";

function App() {
	//
	//
	const handleClick = (e) => {
		setColor(e.target.textContent);
	};

	const [color, setColor] = useState("");

	return (
		<div className="App">
			<h1>Hello React</h1>
			<div className="container">
				<RedButton click={handleClick} />
				<BlueButton click={handleClick} />
				<GreenButton click={handleClick} />
			</div>
			<ColorDisplay background={color} />
		</div>
	);
}

export default App;
