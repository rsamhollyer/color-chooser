import React from "react";

const ColorDisplay = ({ background }) => {
	return (
		<div style={{ backgroundColor: background }} className="display-area">
			<h3>{background}</h3>
		</div>
	);
};

export default ColorDisplay;
