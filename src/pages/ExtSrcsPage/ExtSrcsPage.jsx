import React from "react";
import React from "react";
import "./ExtSrcsDisplay.css";
import ERD from "../../components/ExtSrcsDisplays/ERD";
import Postman from "../../components/ExtSrcsDisplays/PostmanTests";
import WireFrame from "../../components/ExtSrcsDisplays/Wireframe";

const ExtSrcsPage = ({extSrcToDisplay}) => {
	return (
		<div className='page'>
			<{extSrcToDisplay}/>
		</div>
	);
};

export default ExtSrcsPage;
