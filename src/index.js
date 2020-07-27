import 'react-app-polyfill/ie11';
import React from 'react';
import ReactDOM from 'react-dom';
//import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom'
import ScrollToTop from './ScrollToTop';
import AppWrapper from './AppWrapper';

ReactDOM.render(
    <BrowserRouter>
        <ScrollToTop>
            <AppWrapper></AppWrapper>
        </ScrollToTop>
    </BrowserRouter>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
//serviceWorker.unregister();