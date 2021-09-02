import React from 'react';
import { Route, Switch } from 'react-router-dom';
import SplashContainer from './splash/splash_container';
import LogInFormContainer from './session_components/log_in_form_container';
import SignUpFormContainer from './session_components/sign_up_form_container';
import CalendarsContainer from './calendar_components/calendar_index_container'
import CalendarFormContainer from './calendar_components/calendar_form_container';
import CalendarContainer from './calendar_components/calendar_container';

const App = () => (
    <div>
        <header className="header">
            <div className="gcal-head">
                <div className="logo"></div>
            </div>
            <SplashContainer />
        </header>
        <Switch>
            <Route path="/login" component={LogInFormContainer} />
            <Route path="/signup" component={SignUpFormContainer} />
            <Route exact path="/calendars" component={CalendarsContainer} />
            <Route exact path="/calendars/new" component={CalendarFormContainer} />
            <Route path="/calendars/:calenderId" component={CalendarContainer} />
        </Switch>
    </div>
)

export default App