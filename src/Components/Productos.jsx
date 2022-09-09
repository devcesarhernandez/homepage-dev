import {useState} from "react"
import Button from './Button';
import Producto from './Producto';
import Arrow from "../assets/arrow.svg"
import Raqueta from '../assets/Raqueta.png';
import PelotasBote from '../assets/PelotasBote.png';
import PelotasWilson from '../assets/PelotasWilson.png';

const Productos = () => {
	const [productos, setProductos] = useState([
		{
			title: "Wilson Championship Extra Duty Tennis Balls, 3-pk",
			price: 22.09,
			img: PelotasBote
		},
		{
			title: "Wilson Starter 3 Balls",
			price: 24.69,
			img: PelotasWilson
		},
		{
			title: "Wilson Tour Slam Lite Tennis Racquet",
			price: 24.95,
			img: Raqueta
		}
	])
	return <div className="productos">
		<div className="productos__gallery">
			<Button className="productos__btn--nav left">
				<img src={Arrow} />
			</Button>
			<div className="productos__container">
				{productos.map( (producto, idx) => (
					<Producto key={idx} title={producto.title} img={producto.img} price={producto.price} />
				))}
			</div>
			<Button className="productos__btn--nav right">
				<img src={Arrow} />
			</Button>
		</div>
		<Button className="productos__btn--primary" text="Ver todos" component="a"/>
	</div>
}

export default Productos;