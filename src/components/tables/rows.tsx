import { DATAMOCK } from '../../data/mock';

export const TableRows = () => {
	return (
		<tbody className='divide-y divide-gray-200 dark:divide-gray-700'>
			{DATAMOCK.map((data) => (
				<tr>
					<td className='px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200'>
						{data.codigo}
					</td>
					<td className='px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200'>
						{data.periodo}
					</td>
					<td className='px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200'>
						{data.concepto_compra}
					</td>
					<td className='px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200'>
						{data.importe}
					</td>

					<td className='px-6 py-4 whitespace-nowrap text-end text-sm font-medium'>
						<button
							type='button'
							className='inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600'
						>
							{/* <-- buttons --> */}
						</button>
					</td>
				</tr>
			))}
		</tbody>
	);
};
