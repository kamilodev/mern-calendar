import React, { useState } from 'react'
import { Calendar } from 'react-big-calendar'
import { Navbar } from '../ui/Navbar'
import { messages } from '../helpers/calendar-messages'
import { CalendarEvent } from './CalendarEvent'
import { CalendarModal } from './CalendarModal'
import { useDispatch, useSelector } from 'react-redux'
import { uiOpenModal } from '../actions/ui'
import { momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import 'moment/locale/es'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import { eventSetActive, eventClearActiveEvent } from '../actions/events'
import { AddNewFab } from '../ui/AddNewFab'
import { DeleteEventFab } from '../ui/DeleteEventFab'

moment.locale('es')
const localizer = momentLocalizer(moment)

export const CalendarScreen = () => {
	const dispatch = useDispatch()
	const { events, activeEvent } = useSelector(state => state.calendar)

	const [lastView, setLastView] = useState(localStorage.getItem('lastView') || 'month')
	const onDoubleClick = e => {
		dispatch(uiOpenModal())
	}

	const onSelectEvent = e => {
		dispatch(eventSetActive(e))
	}

	const onViewChange = e => {
		setLastView(e)
		localStorage.setItem('lastView', e)
	}

	const onSelectSlot = e => {
		dispatch(eventClearActiveEvent())
	}

	const eventGetter = (event, start, end, isSelected) => {
		const style = {
			backgroundColor: '#416EAD',
			borderRadius: '0px',
			opacity: 0.8,
			display: 'block',
			color: '#241B45',
		}
		return { style }
	}

	return (
		<div className="calendar__screen">
			<Navbar />

			<Calendar
				localizer={localizer}
				events={events}
				startAccesor="start"
				endAccesor="end"
				messages={messages}
				eventPropGetter={eventGetter}
				components={{
					event: CalendarEvent,
				}}
				onDoubleClickEvent={onDoubleClick}
				onSelectEvent={onSelectEvent}
				onView={onViewChange}
				onSelectSlot={onSelectSlot}
				selectable={true}
				view={lastView}
			/>
			<AddNewFab />
			{activeEvent && <DeleteEventFab />}
			<CalendarModal />
		</div>
	)
}