export default ({markup, helmet}) => {
    return `<!DOCTYPE html>
          <html ${helmet.htmlAttributes.toString()}>
             <head>
                    <link rel="stylesheet" href="/dist/styles.css?v=5"/>
                    
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
