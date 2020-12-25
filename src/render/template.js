export default ({markup, helmet}) => {
    return `<!DOCTYPE html>
          <html ${helmet.htmlAttributes.toString()}>
             <head>
                <link rel="stylesheet" type="text/css" href="/dist/styles.css" />
                <link rel="shortcut icon" href="/favicon.ico" type="image/icon" />
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
