import { connect } from 'react-redux';

import TableBody from "../components/TableBody";
import {setRow} from '../actions';

function mapStateToProps(state) {
    return {
        data: state.data,
        page: state.page,
        filter: state.filter
    };
}

function mapDispatchToProps(dispatch) {
    return {
        onSetRow: selectedRow => dispatch(setRow(selectedRow))
    }
}

const TableBodyContainer = connect(mapStateToProps, mapDispatchToProps)(TableBody);

export default TableBodyContainer;