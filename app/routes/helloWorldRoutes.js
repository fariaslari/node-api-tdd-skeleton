const express = require('express'),
router = express.Router(),
helloWorld = require('../controller/helloWorldController');;

router.get('/', (req, res)=>{
    let helloWorld = require('../controller/helloWorldController');

    if(helloWorld.validation(req))
        helloWorld.invoke(req, res);
    else{
        res.status(400).send();
    }
});

module.exports = router