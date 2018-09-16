import React from 'react';

import './style.css';
import ReactDOM from "react-dom";
import Portal from "../Portal";

export default function TableBody(props) {
    const {data, page, filter, onSetRow} = props;
    const filtredSearch = filter.toLowerCase().charAt(0).toUpperCase() + filter.slice(1);

    return (
        < tbody>
        {(data.length > 0)
            ? (filter === 'ALL')
                ? data.map((obj, index) => (index < 50 * page && index > 50 * page - 50) ?
                    <tr key={obj.phone} onClick={e => {
                        e.preventDefault();
                        onSetRow(obj);
                    }}>
                        <td>
                            {obj.id}
                        </td>

                        <td>
                            {obj.firstName}
                        </td>

                        <td>
                            {obj.lastName}
                        </td>

                        <td>
                            {obj.email}
                        </td>

                        <td>
                            {obj.phone}
                        </td>

                        <td>
                            <b>city:</b> {obj.address.city} <br/>
                            <b>state:</b> {obj.address.state} <br/>
                            <b>street address:</b> {obj.address.streetAddress} <br/>
                            <b>zip:</b> {obj.address.zip}
                        </td>

                        <td>
                            {obj.description}
                        </td>
                    </tr> : null)
                : data.filter(obj => obj.id.toString() === filter || obj.id.toString().indexOf(filtredSearch) !== -1 || obj.firstName === filter || obj.firstName.indexOf(filtredSearch) !== -1 || obj.lastName === filter || obj.lastName.indexOf(filtredSearch) !== -1 || obj.email === filter || obj.email.indexOf(filtredSearch) !== -1 || obj.phone === filter || obj.phone.indexOf(filtredSearch) !== -1 || obj.address.streetAddress === filter || obj.address.streetAddress.indexOf(filtredSearch) !== -1 || obj.address.city === filter || obj.address.city.indexOf(filtredSearch) !== -1 || obj.address.state === filter || obj.address.state.indexOf(filtredSearch) !== -1 || obj.address.zip === filter || obj.address.zip.indexOf(filtredSearch) !== -1 || obj.description === filter || obj.description.indexOf(filtredSearch) !== -1)
                    .map((obj, index) => (index < 50 * page && index > 50 * page - 50) ?
                        <tr key={obj.phone} onClick={e => {
                            e.preventDefault();
                            onSetRow(obj);
                        }}>
                            <td>
                                {obj.id}
                            </td>

                            <td>
                                {obj.firstName}
                            </td>

                            <td>
                                {obj.lastName}
                            </td>

                            <td>
                                {obj.email}
                            </td>

                            <td>
                                {obj.phone}
                            </td>

                            <td>
                                <b>city:</b> {obj.address.city} <br/>
                                <b>state:</b> {obj.address.state} <br/>
                                <b>street address:</b> {obj.address.streetAddress} <br/>
                                <b>zip:</b> {obj.address.zip}
                            </td>

                            <td>
                                {obj.description}
                            </td>
                        </tr> : null)
            : ReactDOM.createPortal(<Portal/>, document.getElementById('portal'))

        }
        </tbody>
    )
}