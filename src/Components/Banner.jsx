import Button from './Button'

const Banner = () => {
	return <secction className="banner">
		<div>
			<p className="banner__title">Descubre tu pasión</p>
			<Button text='Comprar ahora' className='banner__btn--primary'/>
		</div>
	</secction>
}

export default Banner;