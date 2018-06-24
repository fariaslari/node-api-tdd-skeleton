const config = global.config;
const connector = require('request');

function HelloWorldService(params, callback){
    connector.get({
        headers: {
            'Content-Type': 'application/json',
        },
        url: config.api_address,
        rejectUnauthorized: false
    },      
    function(err, response, data) {
        if(err){
            callback(err);
        }
        callback(null, data);
    });
}

module.exports.invoke = HelloWorldService;