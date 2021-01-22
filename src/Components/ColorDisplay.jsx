import React from "react";

const ColorDisplay = ({ background }) => {
	return (
		<div className="display-area">
			<h3>{background}</h3>
		</div>
	);
};

export default ColorDisplay;
