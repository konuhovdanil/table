import { connect } from 'react-redux';

import TableHead from "../components/TableHead";
import {setDataSort} from "../actions";

function mapStateToProps(state) {
    return {
        data: state.data
    };
}

function mapDispatchToProps(dispatch) {
    return {
        onSetDataSort: data => dispatch(setDataSort(data))
    };
}

const TableContainer = connect(mapStateToProps, mapDispatchToProps)(TableHead);

export default TableContainer;