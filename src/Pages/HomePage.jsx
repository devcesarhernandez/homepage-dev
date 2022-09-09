import Notification from '../Components/Notification';
import Categories from '../Components/Categories';
import Productos from '../Components/Productos';
import Header from '../Components/Header';
import Banner from '../Components/Banner';
import Footer from '../Components/Footer';

const HomePage = () => {
	return (
		<div className="container">
			<Notification text="Envío gratis en todo méxico" />
			<Header />
			<Productos />
			<Categories />
			<Banner />
			<Footer />
		</div>
	)
}

export default HomePage;