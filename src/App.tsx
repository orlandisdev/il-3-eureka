import { Layout } from './components/layouts';
import data from '../config.json';
import styled from 'styled-components';
import { useTheme } from './components/hooks/useTheme';

function App() {
	const { color, backgroundColor } = useTheme();

	const Body = styled.body`
		${color};
		background-color: ${backgroundColor};
	`;
	return (
		<Body>
			<Layout data={data}>
				<main>
					<b>INSTITUT DE FORMACIÓ CONTÍNUA-IL3</b>
					<p>Universitat de Barcelona</p>
				</main>
			</Layout>
		</Body>
	);
}

export default App;
