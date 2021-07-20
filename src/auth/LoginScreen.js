import React from 'react'

export const LoginScreen = () => {
	return (
		<>
			<header id='nav'>
				<p>
					Created with <i className='fa fa-heart'></i> by {''}
					<a
						target='_blank'
						rel='noopener noreferrer'
						href='https://github.com/kamilodev'>
						KamiloDev
					</a>
				</p>
			</header>
			<div className='container auth__login'>
				<div className='row'>
					<div className='col-md-6 auth__loginform-1'>
						<h3>Ingreso</h3>
						<form>
							<div className='form-group'>
								<input
									type='text'
									className='form-control'
									placeholder='Correo'
								/>
							</div>
							<div className='form-group'>
								<input
									type='password'
									className='form-control'
									placeholder='Contraseña'
								/>
							</div>
							<div className='form-group'>
								<input
									type='submit'
									className='auth__btnSubmit'
									value='Login'
								/>
							</div>
						</form>
					</div>

					<div className='col-md-6 auth__loginform-2'>
						<h3>Registro</h3>
						<form>
							<div className='form-group'>
								<input
									type='text'
									className='form-control'
									placeholder='Nombre'
								/>
							</div>
							<div className='form-group'>
								<input
									type='email'
									className='form-control'
									placeholder='Correo'
								/>
							</div>
							<div className='form-group'>
								<input
									type='password'
									className='form-control'
									placeholder='Contraseña'
								/>
							</div>

							<div className='form-group'>
								<input
									type='password'
									className='form-control'
									placeholder='Repita la contraseña'
								/>
							</div>

							<div className='form-group'>
								<input
									type='submit'
									className='auth__btnSubmit'
									value='Crear cuenta'
								/>
							</div>
						</form>
					</div>
				</div>
			</div>
			<footer>
				<p>
					Created with <i className='fa fa-heart'></i> by {''}
					<a
						target='_blank'
						rel='noopener noreferrer'
						href='https://github.com/kamilodev'>
						KamiloDev
					</a>
				</p>
			</footer>
		</>
	)
}
