import React from 'react';
import ReactDOM from 'react-dom';
import './style.scss';

import App from './components/App/App';
import hoc from './HOC'
const HocApp = hoc(App);
ReactDOM.render(<HocApp/>, document.querySelector("#root"));