import React from 'react';

import './style.css';
import Preloader from '../../images/Preloader.gif';

export default function Portal() {

    return (
        <div className="preloader">
            <img src={Preloader} alt="#"/>
        </div>
    );
}
