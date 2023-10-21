import "./Footer.css";
import Postman from "../../assets/postmanIcon.png";
import drawSQL from "../../assets/drawSQL.svg";
import Whimsical from "../../assets/WhimsicalLogo.svg";
import { Link } from "react-router-dom";

const Footer = () => {
	return (
		<footer>
			<div className='footer-icons'>
				<button type='button' className='footer'>
					<img
						src={Postman}
						alt='Postman Logo'
						width={40}
						height={40}
					/>
					<p className='button-title'>My Postman png</p>
				</button>

				<button type='button' className='footer'>
					<img src={drawSQL} alt='drawSQL logo' />
					<p className='button-title'>My ERD</p>
				</button>
				<button type='button' className='footer'>
					<img src={Whimsical} alt='Whimsical logo' />
					<p className='button-title'>My Wireframe</p>
				</button>
			</div>
			<p className='copyright'>Copyright © 2023</p>
		</footer>
	);
};

export default Footer;
