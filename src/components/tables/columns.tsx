export const TableColumns = () => {
	return (
		<thead>
			<tr>
				<th
					scope='col'
					className='px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase'
				>
					Código
				</th>
				<th
					scope='col'
					className='px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase'
				>
					Periodo
				</th>
				<th
					scope='col'
					className='px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase'
				>
					Concepto compra
				</th>
				<th
					scope='col'
					className='px-6 py-3 text-end text-xs font-medium text-gray-500 uppercase'
				>
					Importe
				</th>
				<th
					scope='col'
					className='px-6 py-3 text-end text-xs font-medium text-gray-500 uppercase'
				></th>
			</tr>
		</thead>
	);
};
