import {connect} from 'react-redux';

import Table from "../components/Table";

function mapStateToProps(state) {
    return {
        selectedRow: state.selectedRow
    };
}

const TableContainer = connect(mapStateToProps)(Table);

export default TableContainer;