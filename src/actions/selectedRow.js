export const SET_SELECTED_ROW = 'SET_SELECTED_ROW';

export function setRow(selectedRow) {
    return {
        type: SET_SELECTED_ROW,
        selectedRow
    }
}