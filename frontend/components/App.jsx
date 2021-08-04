import React from 'react';
import { Route } from 'react-router-dom';
import SplashContainer from './splash/splash_container';
import LogInFormContainer from './session_components/log_in_form_container';
import SignUpFormContainer from './session_components/sign_up_form_container';

const App = () => (
    <div>
        <header>
            <h1>gCal</h1>
            <SplashContainer />
        </header>

        <Route path="/login" component={LogInFormContainer} />
        <Route path="/signup" component={SignUpFormContainer} />
    </div>
)

export default App;