import accesorios from '../assets/accesorios.jpg'
import Raquetas from '../assets/Raquetas.png'
import Pelotas from '../assets/Pelotas.png'

const Categories = () => {
	return <di className="categories">
		<div className="category">
			<img className="category__img" src={Raquetas} alt="Raquetas" />
			<h3 className="category__title"><a href="#">Raquetas</a></h3>
		</div>
		<div className="category">
			<img className="category__img" src={Pelotas} alt="Pelotas" />
			<h3 className="category__title"><a href="#">Pelotas</a></h3>
		</div>
		<div className="category">
			<img className="category__img" src={accesorios} alt="accesorios" />
			<h3 className="category__title"><a href="#">Raquetas</a></h3>
		</div>
	</di>
}

export default Categories;