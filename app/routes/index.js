module.exports.router = (app) =>{
    app.route('/hello_world').get((req, res)=>{
        let helloWorld = require('../controller/helloWorldController');

        if(helloWorld.validation(req))
            helloWorld.invoke(req, res);
        else{
            res.status(400).send();
        }
    });
}