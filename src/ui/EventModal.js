import React, { useState } from 'react'
import DateTimePicker from 'react-datetime-picker'
import moment from 'moment'

const now = moment().minutes(0).seconds(0).add(1, 'hours')
const end = now.clone().add(1, 'hours')

export const EventModal = () => {
	const [dateStart, setDateStart] = useState(now.toDate())
	const [dateEnd, setDateEnd] = useState(end.toDate())

	const [formValues, setFormValues] = useState({
		title: 'Evento',
		notes: '',
		start: now.toDate(),
		end: end.toDate(),
	})

	const { notes, title } = formValues

	const handleInputChange = ({ target }) => {
		setFormValues({
			...formValues,
			[target.name]: target.value,
		})
	}

	const handleStartDateChange = e => {
		setDateStart(e)
		setFormValues({
			...formValues,
			start: e,
		})
	}

	const handleEndDateChange = e => {
		setDateEnd(e)
		setFormValues({
			...formValues,
			end: e,
		})
	}

	const handleSubmitForm = e => {
		e.preventDefault()
		console.log(formValues)
	}

	return (
		<>
			<h1 className='__modal-h1 mt-1'> Nuevo evento </h1>
			<hr />
			<form className='container' onSubmit={handleSubmitForm}>
				<div className='form-group'>
					<label className='mt-2'>Fecha y hora inicio</label>
					<DateTimePicker
						onChange={handleStartDateChange}
						value={dateStart}
						className='form-control'
					/>
				</div>

				<div className='form-group'>
					<label className='mt-2'>Fecha y hora fin</label>
					<DateTimePicker
						onChange={handleEndDateChange}
						value={dateEnd}
						minDate={dateStart}
						className='form-control'
					/>
				</div>

				<hr />
				<div className='form-group'>
					<label className='mt-2'>Titulo y notas</label>
					<input
						type='text'
						className='form-control'
						placeholder='Título del evento'
						name='title'
						autoComplete='off'
						value={title}
						onChange={handleInputChange}
					/>
					<small id='emailHelp' className='form-text text-muted'>
						Una descripción corta
					</small>
				</div>

				<div className='form-group'>
					<textarea
						type='text'
						className='form-control'
						placeholder='Notas'
						rows='5'
						name='notes'
						value={notes}
						onChange={handleInputChange}></textarea>
					<small id='emailHelp' className='form-text text-muted'>
						Información adicional
					</small>
				</div>

				<button
					type='submit'
					className='btn btn-outline-primary btn-block'>
					<i className='far fa-save'></i>
					<span> Guardar</span>
				</button>
			</form>
		</>
	)
}
