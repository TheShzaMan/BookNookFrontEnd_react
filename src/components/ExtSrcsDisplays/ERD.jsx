import React from "react";
import "./ExtSrcsDisplay.css";
import erdImage from "../../assets/ERD_BookNookProject.png";

const ERD = () => {
	return (
		<div>
			<img
				src={erdImage}
				alt='Element Relationship Diagram for this app'
			/>
		</div>
	);
};

export default ERD;
