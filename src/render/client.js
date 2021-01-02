import React from 'react';
import {hydrate} from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import {HelmetProvider} from 'react-helmet-async';
import App from '../App/App/App';

const appRootElm = document.getElementById('root');

hydrate((
    <BrowserRouter>
        <HelmetProvider>
            <App/>
        </HelmetProvider>
    </BrowserRouter>
), appRootElm);
