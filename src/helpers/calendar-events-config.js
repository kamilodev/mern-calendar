import { momentLocalizer } from 'react-big-calendar'
import moment from 'moment'

moment.locale('es')

const localizer = momentLocalizer(moment)

const events = [
	{
		title: 'Cumpleaños del jefe',
		start: moment().toDate(),
		end: moment().add(2, 'hours').toDate(),
		bgcolor: '#fafafa',
		notes: 'Comprar la tarta',
		user: {
			_id: '123',
			name: 'Kamilo',
		},
	},
]

export { localizer, events }
