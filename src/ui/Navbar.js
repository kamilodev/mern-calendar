import React from 'react'
import { useSelector } from 'react-redux';
import { hello } from '../helpers/hello';

export const Navbar = () => {
const {name} = useSelector(state => state.auth)
  
	return (
		<div className='navbar navbar-dark bg-dark'>
			<span className='navbar-brand'>{`Hola! ${hello()}${name}`}</span>
			<button className='btn btn-outline-danger'>
				<i className='fas fa-sign-out-alt'></i>
				<span> Salir</span>
			</button>
		</div>
	)
}
