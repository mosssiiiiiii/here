export default ({markup, helmet}) => {
    return `<!DOCTYPE html>
          <html ${helmet.htmlAttributes.toString()}>
             <head>
             <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                <link rel="stylesheet" type="text/css" href="/dist/styles.css" />
                <link rel="shortcut icon" href="/favicon.ico" type="image/icon" />
                <link rel="manifest" href="/manifest.json" />
                ${helmet.title.toString()}
                ${helmet.meta.toString()}
                ${helmet.link.toString()}              
             </head>
             <body ${helmet.bodyAttributes.toString()}>
                <div id="root">${markup}</div>
                <script src="/dist/client.js" async></script>
             </body>
          </html>`;
};
