const processor = require('../processor/helloWorldProcessor');

function HelloWorld(req, res){
    processor.invoke({}, (err, data)=>{
        if (err) {
            return res.status(500).send(err.toString());
        }
        res.send(data);
    });
}


function HelloWorld_Validation(req){
    return true;
}

module.exports.invoke = HelloWorld;
module.exports.validation = HelloWorld_Validation;