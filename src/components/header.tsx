import styled from 'styled-components';
import { ConfigInterface } from '../types/configSite.types';
import SchoolImg from '../assets/universidad.png';
//import { Link } from 'react-router-dom';

import { IoIosNotificationsOutline } from 'react-icons/io';
import { FiUser } from 'react-icons/fi';
import { useState } from 'react';
import { useTheme } from './hooks/useTheme';
import { useNavigate } from 'react-router-dom';

interface Props {
	data: ConfigInterface;
}

export const Header = ({ data }: Props) => {
	const navigate = useNavigate();

	const [menuActivate, setMenuActive] = useState(1);
	const [userIsLogin] = useState(
		localStorage.getItem('usuarioRegistrado')
	);

	const { menu } = data;
	const { headerBackground, headerColor } = useTheme();

	/* Estilos con los datos optenidos desde la configuración 
    TODO: luego passar a un hook limpio
    */
	const NavStyle = styled.nav`
		display: flex;
		align-items: center;
		justify-content: space-between;
		background-color: ${headerBackground};
		color: ${headerColor};

		.nameContent {
			display: flex;
			justify-content: center;
			align-items: center;
		}

		.subTitleContent {
			display: flex;
			justify-content: center;
			align-items: flex-end;
			margin: 0 60px;

			p {
				font-size: 2rem;
				font-weight: bold;
			}
		}
		.imageContainer {
			width: 50px;
			height: 50px;
			margin: 0 10px;
			img {
				width: 100%;
			}
		}
		.userInformation {
			display: flex;
			justify-content: center;
			align-items: center;
			margin: 0 20px;
			p {
				font-size: 1rem;
			}
			span {
				border: 2px solid #fff;
				margin: 10px;
				border-radius: 20px;
			}
			.icon {
				font-size: 2rem;
				padding: 5px;
			}
		}
		.menu {
			margin: 0 15px;

			ul {
				background-color: #005ea8;
				padding: 5px;
				border-radius: 80px;
				display: flex;
				align-items: center;
				justify-content: center;
				margin: 5px 20px;
				li {
					border-radius: 80px;
					padding: 1px 30px;
					margin: 0 10px;
					text-transform: uppercase;
					&.active {
						background-color: #188cde;
					}
				}
			}
		}
		& p {
			font-size: 1.5rem;
			& span {
				display: block;
				font-size: 0.9rem;
			}
		}
	`;
	const handleClick = () => {
		localStorage.removeItem('usuarioRegistrado');
		navigate('/login');
	};
	return (
		<header>
			<NavStyle>
				<div className='nameContent'>
					<div className='imageContainer'>
						<img src={SchoolImg} alt='' />
					</div>
					<p className='siteNameContent'>
						{data.siteName}
						<span>{data.site}</span>
					</p>

					{/* 
                    Eureka Content
                    */}
					<div className='subTitleContent'>
						<p>{data.sofwareName}</p>
						<div className='menu'>
							<ul>
								{menu.map((menu) => (
									<li
										className={`cursor-pointer	 ${
											menu.id === menuActivate ? 'active' : ''
										}`}
										key={menu.id}
										onClick={() => setMenuActive(menu.id)}
									>
										<span>{menu.name}</span>
										{/* <Link to={'/' + menu.id}>{menu.name}</Link> */}
									</li>
								))}
							</ul>
						</div>
					</div>
				</div>
				{/* User menu */}
				<div className='userInformation'>
					<span>
						<IoIosNotificationsOutline className='icon' />
					</span>
					<span>
						<FiUser className='icon' />
					</span>
					<button onClick={handleClick}>{userIsLogin} </button>
				</div>
			</NavStyle>
		</header>
	);
};
