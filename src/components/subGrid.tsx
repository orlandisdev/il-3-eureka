export const SubGrid = () => {
	return (
		<div>
			<section>
				<details name='facturas'>
					<summary>
						<span className='summary-title'>Sección 1</span>
					</summary>
					<div className='summary-content'>
						<b>Sección 1 de la grid</b>
						<br />
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Sit praesentium ratione aperiam odit minus? Odio eveniet
						natus nihil officiis possimus iure nostrum, cupiditate
						repellat labore recusandae, atque quam deleniti nemo!
					</div>

					<details name=''>
						<summary>
							<span className='summary-title'>Sección 1 subgrid</span>
						</summary>
						<div className='summary-content'>
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Sit praesentium ratione aperiam odit minus? Odio eveniet
							natus nihil officiis possimus iure nostrum, cupiditate
							repellat labore recusandae, atque quam deleniti nemo!
						</div>
					</details>
				</details>

				<details name='facturas'>
					<summary>
						<span className='summary-title'>Sección 2</span>
					</summary>
					<div className='summary-content'>
						<b>Sección 2 de la grid</b>
						<br />
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Sit praesentium ratione aperiam odit minus? Odio eveniet
						natus nihil officiis possimus iure nostrum, cupiditate
						repellat labore recusandae, atque quam deleniti nemo!
					</div>

					<details name=''>
						<summary>
							<span className='summary-title'>Sección 2 subgrid</span>
						</summary>
						<div className='summary-content'>
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Sit praesentium ratione aperiam odit minus? Odio eveniet
							natus nihil officiis possimus iure nostrum, cupiditate
							repellat labore recusandae, atque quam deleniti nemo!
						</div>
					</details>
				</details>

				<details name=''>
					<summary>
						<span className='summary-title'>Sección 3</span>
					</summary>
					<div className='summary-content'>
						<b>Sección 3 de la grid</b>
						<br />
						<b>Sección 3 Sin Subgrid</b>
						<br />
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Sit praesentium ratione aperiam odit minus? Odio eveniet
						natus nihil officiis possimus iure nostrum, cupiditate
						repellat labore recusandae, atque quam deleniti nemo!
					</div>
				</details>
			</section>
		</div>
	);
};
