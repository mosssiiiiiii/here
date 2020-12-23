import React from 'react';
import {hydrate} from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import App from '../App/App';

const appRootElm = document.getElementById('root');

hydrate((
    <BrowserRouter>
        <App/>
    </BrowserRouter>
), appRootElm);
