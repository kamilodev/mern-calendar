import React from 'react'
import { Calendar, momentLocalizer } from 'react-big-calendar'
import { Navbar } from '../ui/Navbar'
import { messages } from '../helpers/calendar-messages'
import moment from 'moment'
import 'moment/locale/es'
import 'react-big-calendar/lib/css/react-big-calendar.css'

moment.locale('es')
const localizer = momentLocalizer(moment)

const events = [
	{
		title: 'Cumpleaños de jefe',
		start: moment().toDate(),
		end: moment().add(2, 'hours').toDate(),
		bgcolor: '#fafafa',
		notes: 'Comprar la tarta',
	},
]

export const CalendarScreen = () => {
	const eventGetter = (event, start, end, isSelected) => {
		const style = {
			backgroundColor: '#C6D13B',
			borderRadius: '0px',
			opacity: 0.8,
			display: 'block',
			color: '#241B45',
		}
		return { style }
	}

	return (
		<div className='calendar__screen'>
			<Navbar />

			<Calendar
				localizer={localizer}
				events={events}
				startAccesor='start'
				endAccesor='end'
				messages={messages}
				eventPropGetter={eventGetter}
			/>
		</div>
	)
}
