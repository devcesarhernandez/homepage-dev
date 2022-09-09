import Button from './Button'
import Nav from './Nav'

const Header = () => {
	return <header className="header">
		<Nav />
		<div>
			<p className="header__title">El mejor deporte</p>
			<p className="header__text">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
			<Button text='Compra ahora' className='header__btn--primary'/>
		</div>
	</header>
}

export default Header;