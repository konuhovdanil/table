import React from 'react';

import Header from "../Header";
import FilterContainer from "../../containers/FilterContainer";
import TableContainer from "../../containers/TableContainer";

export default function Data() {
    return (
        <div className={'table'}>
            <Header text={'Data'}/>

            <FilterContainer/>

            <div className="container">
                <TableContainer/>
            </div>
        </div>
    )
}