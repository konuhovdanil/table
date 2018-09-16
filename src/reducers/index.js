import {combineReducers} from 'redux';

import data from './data';
import filter from './filter';
import page from './page';
import selectedRow from './selectedRow';

const reducer = combineReducers({
    data,
    filter,
    page,
    selectedRow
});

export default reducer;