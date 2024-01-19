import { useTheme } from '../hooks/useTheme';
import { TableColumns } from './columns';
import { TableRows } from './rows';

export const MainTable = () => {
	const { tableBackground } = useTheme();
	return (
		<>
			<div
				className='container tableContainer'
				style={{ background: tableBackground }}
			>
				<div className='flex flex-col'>
					<div className='-m-1.5 overflow-x-auto'>
						<div className='p-1.5 min-w-full inline-block align-middle'>
							<div className='overflow-hidden'>
								<table className='min-w-full divide-y divide-gray-200 dark:divide-gray-700'>
									<TableColumns />
									<TableRows />
								</table>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
