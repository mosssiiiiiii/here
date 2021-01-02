process.env.NODE_ENV = 'development';
require('../setup/envLoader');

const express = require('express');
const webpack = require('webpack');
const config = require('../webpack/development');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const webpackHotServerMiddleware = require('webpack-hot-server-middleware');

const app = express()
const compiler = webpack(config)


// static files
app.use(express.static('public'));

// make bundled project source files accessable from memory
app.use(webpackDevMiddleware(compiler, {
    serverSideRender: true,
    publicPath: "/dist/",
}))

// recompile webpack when file changes
app.use(webpackHotMiddleware(compiler.compilers.find(compiler => compiler.name === 'client')))

// hot update Webpack bundles on the server
app.use(webpackHotServerMiddleware(compiler))


const PORT = process.env.PORT || 3000;

app.listen(PORT, error => {
    if (error) {
        return console.error('this is just an error',error);
    } else {
        console.log(`Development Express server running at http://localhost:${PORT}`);
    }
});
