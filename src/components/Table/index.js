import React from 'react';

import './style.css';
import TableHeadContainer from "../../containers/TableHeadContainer";
import TableBodyContainer from "../../containers/TableBodyContainer";
import PaginationContainer from "../../containers/PaginationContainer";

export default function Table(props) {
    const {selectedRow} = props;

    return (
        <div>
            <table className="table">
                <TableHeadContainer/>
                <TableBodyContainer/>
            </table>
            {(Object.keys(selectedRow).length > 0)
                ?
                <div className="selected-row">
                    <div>
                        Выбран пользователь < b> {`${selectedRow.firstName} ${selectedRow.lastName}`}</b>
                    </div>

                    <div>
                        Описание: <br/>
                        <textarea readOnly value={selectedRow.description}></textarea>
                    </div>

                    <div>
                        Адрес проживания: <b>{selectedRow.address.streetAddress}</b>
                    </div>

                    <div>
                        Город: <b>{selectedRow.address.city}</b>
                    </div>

                    <div>
                        Провинция/штат: <b>{selectedRow.address.state}</b>
                    </div>

                    <div>Индекс: <b>{selectedRow.address.zip}</b></div>
                </div>
                : null}
            <PaginationContainer/>
        </div>
    )
}