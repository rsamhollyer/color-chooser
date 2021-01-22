import "./App.css";
import { useState } from "react";
import RedButton from "./Components/RedButton";
import BlueButton from "./Components/BlueButton";
import GreenButton from "./Components/GreenButton";
import ColorDisplay from "./Components/ColorDisplay";
import Color from "./Components/Color";
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
				<Color click={handleClick} color="Red" />
				<Color click={handleClick} color="Green" />
				<Color click={handleClick} color="Blue" />
				{/* <RedButton click={handleClick} /> */}
				{/* <BlueButton click={handleClick} /> */}
				{/* <GreenButton click={handleClick} /> */}
			</div>
			<ColorDisplay background={color} />
		</div>
	);
}

export default App;
