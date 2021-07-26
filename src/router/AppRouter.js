import React, {useEffect} from 'react'
import {BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom'
import {LoginScreen} from "../auth/LoginScreen";
import {CalendarScreen} from '../calendar/CalendarScreen'
import { useDispatch } from 'react-redux'
import { startChecking } from '../actions/auth'

export const AppRouter = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(startChecking())
    }, [dispatch])

    return (
        <div>
            <Router>
                <Switch>
                    <Route
                        exact
                        path='/login'
                        component={LoginScreen}
                    />
                    <Route
                        exact
                        path='/'
                        component={CalendarScreen}
                    />
                    <Redirect to='/login' />
                </Switch>
            </Router>
        </div>
    )
}