import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
import App from "./App";
import Login from "./pages/Login";
import Access from './pages/Access';

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
            case "/accessdenied":
                return <Route path="/accessdenied" component={Access} />
            default:
                return <App />;
        }
    }
}

export default withRouter(AppWrapper);