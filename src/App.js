import React from 'react';
import {Link} from 'react-router-dom';

import './App.css';
import Header from "./components/Header";

function App(props) {
    const lessDataUrl = 'http://www.filltext.com/?rows=32&id=%7Bnumber%7C1000%7D&firstName=%7BfirstName%7D&lastName=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&address=%7BaddressObject%7D&description=%7Blorem%7C32%7D';
    const bigDataUrl = 'http://www.filltext.com/?rows=1000&id=%7Bnumber%7C1000%7D&firstName=%7BfirstName%7D&delay=3&lastName=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&address=%7BaddressObject%7D&description=%7Blorem%7C32%7D';

    return (
        <div className="App">
            <Header text={'Choose data size'}/>

            <div className="links clearfix">
                <Link to={'/table:1'} className={'link-to-table'} onClick={() => {
                    props.onGetData(bigDataUrl);
                }}>
                    Big data
                </Link>

                <Link to={'/table:1'} className={'link-to-table'} onClick={() => {
                    props.onGetData(lessDataUrl);
                }}>
                    Less data
                </Link>
            </div>
        </div>)
}

export default App;
