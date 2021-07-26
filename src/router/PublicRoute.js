import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { PropTypes } from 'prop-types'

export const PublicRoute = ({
                                isAutenticated,
                                component: Component,
                                ...rest
                            }) => {
    return (
        <Route
            {...rest}
            component={props => (
                (isAutenticated)
                    ? <Redirect to='/' />
                    : <Component {...props} />
            )
            }
        />
    )
}

PublicRoute.propTypes = {
    isAutenticated: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired,
}