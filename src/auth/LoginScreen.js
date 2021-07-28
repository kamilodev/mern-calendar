import React from 'react'
import { useForm } from '../hooks/useForm'
import { startLogin, startRegister } from '../actions/auth'
import { useDispatch } from 'react-redux'
import Swal from 'sweetalert2'

export const LoginScreen = () => {
	const dispatch = useDispatch()
	const [formLoginValues, handleLoginInputChange] = useForm({
		lEmail: '',
		lPassword: '',
	})

	const [formRegisterValues, handleRegisterInputChange] = useForm({
		rName: '',
		rEmail: '',
		rPassword1: '',
		rPassword2: '',
	})

	const { lEmail, lPassword } = formLoginValues
	const { rName, rEmail, rPassword1, rPassword2 } = formRegisterValues

	const handleLogin = e => {
		e.preventDefault()
		dispatch(startLogin(lEmail, lPassword))
	}

	const handleRegister = e => {
		e.preventDefault()
		if (rPassword1 !== rPassword2) {
			return Swal.fire('Error', 'Passwords must be equals', 'error')
		}
		dispatch(startRegister(rName, rEmail, rPassword1))
	}

	return (
		<>
			<header id="nav">
				<p>
					Created with <i className="fa fa-heart"></i> by {''}
					<a
						target="_blank"
						rel="noopener noreferrer"
						href="https://github.com/kamilodev">
						KamiloDev
					</a>
				</p>
			</header>
			<div className="container auth__login">
				<div className="row">
					<div className="col-md-6 auth__loginform-1">
						<h3>Ingreso</h3>
						<form onSubmit={handleLogin}>
							<div className="form-group">
								<input
									type="text"
									className="form-control"
									placeholder="Correo"
									name="lEmail"
									value={lEmail}
									onChange={handleLoginInputChange}
								/>
							</div>
							<div className="form-group">
								<input
									type="password"
									className="form-control"
									placeholder="Contraseña"
									name="lPassword"
									value={lPassword}
									onChange={handleLoginInputChange}
								/>
							</div>
							<div className="form-group">
								<input type="submit" className="auth__btnSubmit" value="Login" />
							</div>
						</form>
					</div>

					<div className="col-md-6 auth__loginform-2">
						<h3>Registro</h3>
						<form onSubmit={handleRegister}>
							<div className="form-group">
								<input
									type="text"
									className="form-control"
									placeholder="Nombre"
									value={rName}
									name="rName"
									onChange={handleRegisterInputChange}
								/>
							</div>
							<div className="form-group">
								<input
									type="email"
									className="form-control"
									placeholder="Correo"
									value={rEmail}
									name="rEmail"
									onChange={handleRegisterInputChange}
								/>
							</div>
							<div className="form-group">
								<input
									type="password"
									className="form-control"
									placeholder="Contraseña"
									value={rPassword1}
									name="rPassword1"
									onChange={handleRegisterInputChange}
								/>
							</div>

							<div className="form-group">
								<input
									type="password"
									className="form-control"
									placeholder="Repita la contraseña"
									value={rPassword2}
									name="rPassword2"
									onChange={handleRegisterInputChange}
								/>
							</div>

							<div className="form-group">
								<input
									type="submit"
									className="auth__btnSubmit"
									value="Crear cuenta"
								/>
							</div>
						</form>
					</div>
				</div>
			</div>
			<footer>
				<p>
					Created with <i className="fa fa-heart"></i> by {''}
					<a
						target="_blank"
						rel="noopener noreferrer"
						href="https://github.com/kamilodev">
						KamiloDev
					</a>
				</p>
			</footer>
		</>
	)
}
