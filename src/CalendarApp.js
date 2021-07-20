import React from 'react'
import {AppRouter} from "./router/AppRouter";
import {AuthContext} from "./auth/AuthContext";

export const CalendarApp = () => {
    return (
        <div>
            <AuthContext.Provider>
                <AppRouter />
            </AuthContext.Provider>
        </div>
    )
}