var express = require('express'),
    router = express.Router();

router.use('/hello_world', require('./helloWorldRoutes'));

router.use('/', (req, res)=>{
    res.status(200).send();
});

module.exports = router;