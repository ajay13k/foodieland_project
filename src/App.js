import Navbar from './componets/Navbar';
import Static from './componets/static';
import Static2 from './componets/static2';
import Footer from './componets/footer';
import Category_api from './componets/category';
import Recipes_api from './recipes';
const App = () => {
	return (<>
		<Navbar />
		<Category_api/>
		<Recipes_api/>
		<Static />
		<Static2 />
		<Footer />
	</>

	);
}

export default App;