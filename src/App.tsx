import { Layout } from './components/layouts';
import data from '../config.json';
import styled from 'styled-components';
import { useTheme } from './components/hooks/useTheme';
import { MainTable } from './components/tables/mainTable';
import { Card } from './components/cards/card';

function App() {
	const {
		color,
		backgroundColor,
		oneFractionElementBackground,
		towFractionElementBackground,
		towFractionElementBorder,
	} = useTheme();

	const Body = styled.body`
		${color};
		background-color: ${backgroundColor};
	`;
	return (
		<Body>
			<Layout data={data}>
				<main
					style={{
						padding: '0 20px',
						background: oneFractionElementBackground,
					}}
				>
					<b>INSTITUT DE FORMACIÓ CONTÍNUA-IL3</b>
					<p>Universitat de Barcelona</p>
					<MainTable />
				</main>
				<div
					style={{
						background: towFractionElementBackground,
						borderLeft: towFractionElementBorder,
						padding: '20px',
					}}
				>
					<Card />
				</div>
			</Layout>
		</Body>
	);
}

export default App;
