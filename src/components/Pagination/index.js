import React from 'react';
import {Link} from 'react-router-dom';

import './style.css';

export default function Pagination(props) {
    const pagination = [];
    const {data, onSetPage, filter} = props;
    const filtredSearch = filter.toLowerCase().charAt(0).toUpperCase() + filter.slice(1);

    if (data.length > 0) {
        if (filter === 'ALL') {
            let length = data.length / 50;
            for (let i = 1; i <= length; i++) {
                pagination.push(Math.round(i));
            }
        } else {
            let length = data.filter(obj => obj.id.toString() === filter || obj.id.toString().indexOf(filtredSearch) !== -1 || obj.firstName === filter || obj.firstName.indexOf(filtredSearch) !== -1 || obj.lastName === filter || obj.lastName.indexOf(filtredSearch) !== -1 || obj.email === filter || obj.email.indexOf(filtredSearch) !== -1 || obj.phone === filter || obj.phone.indexOf(filtredSearch) !== -1 || obj.address.streetAddress === filter || obj.address.streetAddress.indexOf(filtredSearch) !== -1 || obj.address.city === filter || obj.address.city.indexOf(filtredSearch) !== -1 || obj.address.state === filter || obj.address.state.indexOf(filtredSearch) !== -1 || obj.address.zip === filter || obj.address.zip.indexOf(filtredSearch) !== -1 || obj.description === filter || obj.description.indexOf(filtredSearch) !== -1).length / 50;
            for (let i = 1; i <= length; i++) {
                pagination.push(Math.round(i));
            }
        }
    }

    return (
        <div className="pagination">
            {pagination.map(page => <Link key={page} to={`/table:${page}`}
                                          className={'link-to-table'}
                                          onClick={(e) => {
                                              onSetPage(page);
                                          }}>{page}</Link>)}
        </div>
    )

}