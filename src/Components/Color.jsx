import React from "react";

const Color = ({ click, color }) => {
	return (
		<button value={color} onClick={click}>
			{color}
		</button>
	);
};

export default Color;
