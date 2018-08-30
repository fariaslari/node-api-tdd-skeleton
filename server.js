global.config = require('./app/config/').get(process.env.NODE_ENV);

const swaggerUi = require('swagger-ui-express'),
      swaggerDocument = require('./swagger.json'),
      express = require('express'),
      app = express(),
      router = express.Router(),
      port = process.env.PORT || 8081;

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use(require('./app/routes'));
app.use('/', router);


app.listen(port, ()=>{
    console.log('Server started at %i. Environment: %s', port, process.env.NODE_ENV);
});
