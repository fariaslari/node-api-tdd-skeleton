const service = require('../service/helloWorldService');

function HelloWorldProcessor(params, callback){
    service.invoke(params, (err, data)=>{
        if (err) {
            return callback(err);
        }
        callback(err, Formatter(data));
    });
}

function Formatter(data) {
    data = JSON.parse(data);
    let format = {
        message: "Hello, " + data.hello
    }
    return format;
}

module.exports.invoke = HelloWorldProcessor;