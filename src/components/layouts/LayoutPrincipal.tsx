import { ReactNode, FC } from 'react';
import { Header, Menu } from '..';
import { ConfigInterface } from '../../types/configSite.types';
import styled from 'styled-components';

interface Props {
	children: ReactNode;
	data: ConfigInterface;
}

export const Layout: FC<Props> = ({ children, data }) => {
	const Container = styled.div`
		display: grid;
		grid-template-columns: auto 1fr;
	`;
	return (
		<>
			<Header data={data} />
			<Container>
				<Menu data={data} />

				{children}
			</Container>
		</>
	);
};
