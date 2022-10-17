require('./config/config');
const express = require('express');
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUI = require('swagger-ui-express');
var airRouter = require(`${__dirname}/routes/air.js`);
const cron = require('node-cron');
const recordControllers = require('./controllers/recordControllers');
const app = express();
var {mongoose} = require('./db/mongoose');
var port = process.env.PORT || 5000;
const swaggerOptions = {
    swaggerDefinition: {
      info: { 
        title : '“AIR QUALITY”',
        description: '“the air quality information”',
        contact : { name: 'Youssef Dahmane Jdid'},
        servers : 'http://localhost:5000'
      }
    }, 
    apis: [`${__dirname}/routes/*.js`]
}
const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerDocs));

cron.schedule('* * * * *', () => {
  recordControllers.saveRecord();
});

app.use('/air', airRouter);

app.listen(port, ()=>console.log('Server listening'));

module.exports = {app};
