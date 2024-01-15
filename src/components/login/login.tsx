export const Login = () => {
	return (
		<div className='container'>
			<form>
				<ul>
					<li>
						<label htmlFor='name'>Usuario:</label>
						<input type='text' id='name' name='user_name' />
					</li>
					<li>
						<label htmlFor='mail'>Contraseña:</label>
						<input type='password' id='mail' name='user_mail' />
					</li>
					<li>
						<button>Entrar</button>
					</li>
				</ul>
			</form>
		</div>
	);
};
