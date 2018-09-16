import { SET_SELECTED_ROW } from '../actions';

function reducer(state = {}, action) {
    switch (action.type) {
        case SET_SELECTED_ROW:
            return action.selectedRow;

        default:
            return state;
    }
}

export default reducer;