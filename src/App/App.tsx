import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { NavBar } from "./Global/NavBar";
import { Banner } from "./Content/Banner";
import { Skills } from './Content/Skills';
import { Projects } from './Content/Projects';
import { Contact } from './Content/Contact';
import { Footer } from './Content/Footer';


function App() {

	return (
		<div className="App">
			<NavBar/>
			<Banner/>
			<Skills/>
			<Projects/>
			<Contact/>
			<Footer/>
		</div>
	);
}

export default App;
