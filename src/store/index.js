import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise';

import state from './state.json';
import reducer from '../reducers';

const store = createStore(reducer, state, applyMiddleware(thunk, promise));

export default store;