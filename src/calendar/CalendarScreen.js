import React from 'react'
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import 'react-big-calendar/lib/css/react-big-calendar.css'

import { Navbar } from '../ui/Navbar'

const localizer = momentLocalizer(moment)

const events = [
	{
		title: 'Cumpleaños de jefe',
		start: moment().toDate(),
		end: moment().add(2, 'hours').toDate(),
		bgcolor: '#fafafa',
	},
]

export const CalendarScreen = () => {
	return (
		<div className='calendar__screen'>
			<Navbar />

			<Calendar
				localizer={localizer}
				events={events}
				startAccesor='start'
				endAccesor='end'
			/>
		</div>
	)
}
