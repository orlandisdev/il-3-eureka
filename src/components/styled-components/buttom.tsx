import styled from 'styled-components';
interface Props {
	color: string;
	bg: string;
}
export const StyledButtom = styled.button<Props>`
	padding: 10px;
	color: ${({ color }) => color};
	background-color: ${({ bg }) => bg};
	border: none;
	outline: none;
`;
