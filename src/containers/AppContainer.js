import { connect } from 'react-redux';

import {getData} from '../actions';
import App from "../App";

function mapDispatchToProps(dispatch) {
    return {
        onGetData: url => dispatch(getData(url))
    };
}

const AppContainer = connect(null, mapDispatchToProps)(App);

export default AppContainer;