'use strict';

// Public API
module.exports.publicEndpoint = (event, context, callback) => callback(null, {
    statusCode: 200,
    headers: {
        /* Required for CORS support to work */
        'Access-Control-Allow-Origin': '*',
        /* Required for cookies, authorization headers with HTTPS */
        'Access-Control-Allow-Credentials': true,
    },
    body: JSON.stringify({
        message: 'Hi ⊂◉‿◉つ from Public API',
    }),
});

// Private API
module.exports.privateEndpoint = (event, context, callback) => callback(null, {
    statusCode: 200,
    headers: {
        /* Required for CORS support to work */
        'Access-Control-Allow-Origin': '*',
        /* Required for cookies, authorization headers with HTTPS */
        'Access-Control-Allow-Credentials': true,
    },
    body: JSON.stringify({
        message: 'Hi ⊂◉‿◉つ from Private API. Only logged in users can see this',
    }),
});