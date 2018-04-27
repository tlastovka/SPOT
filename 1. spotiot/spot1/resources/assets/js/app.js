// app.js

require('./bootstrap');
import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import PropTypes from 'prop-types'; //may probably go out

import Master from './components/Master';
import CreateItem from './components/CreateItem';

render(
    <Router history={browserHistory}>
        <Route path="/" component={Master} />
        <Route path="/" component={CreateItem} />

    </Router>,
        document.getElementById('example'));




/** <div>
        <Master />
        <CreateItem />
    </div>,
    document.getElementById('example'));
 **/