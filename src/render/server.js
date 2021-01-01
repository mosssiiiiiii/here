import React from 'react';
import ReactDOMServer from 'react-dom/server';
import {StaticRouter} from 'react-router-dom';
import {HelmetProvider} from 'react-helmet-async';
import {Helmet} from "react-helmet";
import Template from './template';
import App from "../App/App";



export default function serverRenderer({clientStats, serverStats}) {
    return (req, res, next) => {
        const context = {};
        const helmetContext = {};
        const markup = ReactDOMServer.renderToString(
            <StaticRouter location={req.url} context={context}>
                <HelmetProvider context={helmetContext}>
                    <App />
                </HelmetProvider>
            </StaticRouter>
        );
        const helmet = Helmet.renderStatic();

        res.status(200).send(Template({
            markup: markup,
            helmet: helmet,
        }));
    };
}
