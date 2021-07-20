import React from 'react'
import { AppRouter } from './router/AppRouter'
import { AuthContext } from './auth/AuthContext'
import './styles/styles.scss'

export const CalendarApp = () => {
	return (
		<>
			<AuthContext.Provider>
				<AppRouter />
			</AuthContext.Provider>
		</>
	)
}
