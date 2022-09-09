import Persona from "../assets/Persona.svg"

const Nav = () => {
	return <nav className="nav">
		<ul>
			<li className="drowpdown">
				<a href="#" className="drowpdown__text">Productos</a>
				<ul className="dropdown__content">
					<li><a href="#">Raquetas</a></li>
					<li><a href="#">Pelotas</a></li>
					<li><a href="#">Accesorios</a></li>
				</ul>
			</li>
			<li>
				<a href="/"><img src={Persona} alt="Home" /></a>
			</li>
			<li>
				<a href="#">Contacto</a>
			</li>
		</ul>
	</nav>
}

export default Nav;