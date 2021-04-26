import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
import App from "./App";
import Login from "./pages/Login";
import Access from './pages/Access';
import Error from './pages/Error';
import NotFound from './pages/NotFound';
import SignUp from './pages/SignUp';

class AppWrapper extends Component {
    
    componentDidUpdate(prevProps) {
        if (this.props.location !== prevProps.location) {
            window.scrollTo(0, 0)
        }
    }

    render() {
        switch (this.props.location.pathname) {
            case "/login":
                return <Route path="/login" component={Login} />
            case "/sign-up":
                return <Route path="/sign-up" component={SignUp} />
            case "/accessdenied":
                return <Route path="/accessdenied" component={Access} />
            case "/error":
                return <Route path="/error" component={Error} />
            case "/404":
                return <Route path="/404" component={NotFound} />
            default:
                return <App />;
        }
    }
}

export default withRouter(AppWrapper);