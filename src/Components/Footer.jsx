import Instagram from '../assets/Instagram.svg';
import Facebook from '../assets/Facebook.svg';

const Footer = () => {
	return (
		<footer className="footer">
			<div className="footer__redes">
				<a href="#" target="_blank"><img src={Instagram} alt="Instagram" /></a>
				<a href="#" target="_blank"><img src={Facebook} alt="Facebook" /></a>
			</div>
			<p className="footer__text">@ DEV. All Rights Reserved. <a href="#">Privacy Policy.</a><a href="#">Teams & Conditions</a></p>
		</footer>
	)
}

export default Footer;