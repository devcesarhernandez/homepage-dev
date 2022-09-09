const Button = ({type, link, text, children, className, component}) => {

	if( component === 'a') {
		return <a href={link || '#'} className={className} >{ children || text }</a>
	}
	
	return <button className={className} type={type || 'button'}>{ children || text }</button>
}

export default Button;