const Producto = ({img, title, price, link}) => {
	return <div className="producto">
		<img className="producto__img" src={img} />
		<h3 className="producto__title">
			<a href={link || ''}>{title}</a>
		</h3>
		<p className="producto__price">{price}</p>
	</div>
}

export default Producto;