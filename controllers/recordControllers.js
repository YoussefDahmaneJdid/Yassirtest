var {Record} = require('../schema/record');
const {getDateNow} = require('../utils/getDate');

const nearestcityControllers = require('../controllers/nearestcityControllers');


const {ObjectId} = require('mongodb');
module.exports =  {




saveRecord : function(){
    const recordID = new ObjectId();
    nearestcityControllers.getDataOfNearestCity(48.856613,2.352222).then((data)=>{
      data = JSON.parse(data);
      var record = new Record({
            Id :recordID,
            DateTime:getDateNow(),
            City : data.data.city,
            State : data.data.state,
            Country :data.data.country,
            Type :data.data.location.type,
            Lat: data.data.location.coordinates[0],
            Lon: data.data.location.coordinates[1],
            Timerecord: data.data.current.pollution.ts,
            aqius: data.data.current.pollution.aqius,
            mainus: data.data.current.pollution.mainus,
            aqicn: data.data.current.pollution.aqicn,
            maincn: data.data.current.pollution.maincn,
            tp:data.data.current.weather.tp,
            pr: data.data.current.weather.pr,
            hu: data.data.current.weather.hu,
            ws: data.data.current.weather.ws,
            wd: data.data.current.weather.wd,
            ic: data.data.current.weather.ic,
            
      
         });
         record.save();


       
            
              
      }).catch((err)=>{
         console.log(err)
      })


 
},


}