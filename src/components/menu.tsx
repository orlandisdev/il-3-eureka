import styled, { css } from 'styled-components';
import { ConfigInterface } from '../types/configSite.types';
import { useState } from 'react';

interface Props {
	data: ConfigInterface;
}
interface IProps {
	collapse?: boolean;
}

export const Menu = ({ data }: Props) => {
	const [collapse, setCollapse] = useState(false);

	const {
		leftMenu,
		themes: {
			clear: { leftMenuBackground, leftMenuColor },
		},
		icons: { help, close, open },
	} = data;

	const Menu = styled.nav<IProps>`
		background-color: ${leftMenuBackground};
		color: ${leftMenuColor};
		height: 93.5vh;
		padding: 0 20px;
		li {
			width: 100%;
			height: 45px;
			text-align: center;
			margin: 15px 0;
			img {
				margin: 0 auto;
			}
		}
		.footerIcons {
			margin: 200px 0;
			text-align: center;
			display: flex;
			flex-direction: column;
			img {
				margin: 0 auto;
			}
			.helpContent {
				span {
					margin-bottom: 30px;
				}
			}
		}
		.textHiddenOnCollapse {
			opacity: ${({ collapse }) =>
				css`
					${!collapse ? 1 : 0};
				`};
			transition: all 0.2s ease-out;
		}

		.closeLeftMenu {
			margin-top: 10px;
			padding: 15px;
		}
		.arrowsMenu {
			margin-top: 15px;
		}
	`;

	return (
		<Menu collapse={collapse}>
			<ul>
				{leftMenu.map((menu) => (
					<li key={menu.id}>
						<img width='20' height='20' src={menu.icon} alt='' />
						{!collapse ? (
							<span className='textHiddenOnCollapse'>
								{menu.name}
							</span>
						) : (
							''
						)}
					</li>
				))}
			</ul>

			<div className='footerIcons'>
				<button className='helpContent'>
					<img width='32' height='32' src={help} alt='' />
					{!collapse ? <span>Ayuda</span> : ''}
				</button>
				<div className='arrowsMenu'>
					<button
						className='closeLeftMenu'
						onClick={() => setCollapse(!collapse)}
					>
						<img
							width='15'
							height='15'
							src={!collapse ? close : open}
							alt=''
						/>
					</button>
				</div>
			</div>
		</Menu>
	);
};
