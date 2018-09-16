import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {Route} from 'react-router';
import {BrowserRouter} from 'react-router-dom';

import Data from './components/Data';
import store from './store';
import AppContainer from "./containers/AppContainer";

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <div className="app">
                <Route exact path={'/'} component={AppContainer}/>
                <Route path={'/table:page'} component={Data}/>
            </div>
        </BrowserRouter>
    </Provider>, document.getElementById('root'));
