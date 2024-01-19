import { CardStyled } from '../styled-components/cardStyled';
import { SubGrid } from '../subGrid';
import image from '/expediente.png';
export const Card = () => {
	return (
		<div>
			<SubGrid />
			<CardStyled>
				<div className='headerStyles'>
					<div className='imgContainer'>
						<img src={image} alt='' />
					</div>
					<p>Datos del expediente seleccionado</p>
				</div>

				<form action=''>
					<div className='formInpusValues'>
						<div className='formInputContent'>
							<label htmlFor=''>Num expediente</label>
							<input type='text' value='Co 2019 p1' />
						</div>
						<div className='formInputContent'>
							<label htmlFor=''>Periodo expediente</label>
							<input type='text' value='01/01/2021 - 31/12/2021' />
						</div>
					</div>
					<div className='formInpusValues'>
						<div className='formInputContent'>
							<label htmlFor=''>Importe disponible</label>
							<input type='text' value='1500' />
						</div>
						<div className='formInputContent'>
							<label htmlFor=''>Concepto compra</label>
							<input type='text' value='Servicios Programación' />
						</div>
					</div>
				</form>
			</CardStyled>
		</div>
	);
};
