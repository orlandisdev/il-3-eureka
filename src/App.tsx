import { Layout } from './components/layouts';
import data from '../config.json';
import { Login } from './components/login';

function App() {
	return (
		<Layout data={data}>
			<main>
				<b>INSTITUT DE FORMACIÓ CONTÍNUA-IL3</b>
				<p>Universitat de Barcelona</p>

				<Login />
			</main>
		</Layout>
	);
}

export default App;
