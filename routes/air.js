var express = require('express');
var router = express.Router();
const nearestcityControllers = require('../controllers/nearestcityControllers');
/* GET users listing. */

/**
 * @swagger
 * /air/:Lat/:Lon:
 *   get:
 *    description: Get air quality of nearest city
 *    parameters:
 *       - in: path
 *         name: Lat
 *         schema:
 *           type: Float
 *         required: true
 *         description: Latitude of nearst city
 *       - in: path
 *         name: Lon
 *         schema:
 *           type: Float
 *         required: true
 *         description: Longitude of nearst city
 *    response:
 *      200:
 *        description: Sucess
 *      400:
 *        description: Error
 */
router.get('/:lat/:lon', function(req, res, next) {
  latitude = req.params.lat;
  longitude = req.params.lon;
  nearestcityControllers.getDataOfNearestCity(latitude,longitude).then((data)=>{
    res.status(200).send(data);
  }).catch((err)=>{
     res.status(400).send('error',err);
  })

});
 


module.exports = router;