var express = require('express');
var router = express.Router();
const nearestcityControllers = require('../controllers/nearestcityControllers');
/* GET users listing. */

/**
 * @swagger
 * /air:
 *   get:
 *    description: Get air quality of nearest city
 *    response:
 *      200:
 *        description: Sucess
 */
router.get('/:lat/:lon', function(req, res, next) {
  latitude = req.params.lat;
  longitude = req.params.lon;
  nearestcityControllers.getDataOfNearestCity(latitude,longitude).then((data)=>{
    res.status(200).send(data);
  }).catch((err)=>{
     res.status(400).send('connection error');
  })

});
 


module.exports = router;