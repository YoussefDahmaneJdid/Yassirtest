var request = require('request');
var config = require('../config/config.json');

module.exports = {
    getDataOfNearestCity: async function (latitude, longitude) {
        let Api_Key = config.API_KEY;
        let options = {
            'method': 'GET',
            'url': `http://api.airvisual.com/v2/nearest_city?lat=${latitude}&lon=${longitude}&key=${Api_Key}`
        };
        
        return new Promise(function (resolve, reject) {
            request(options, function (error, response) {
                resolve(response.body);
            });
        }).catch((error) => {
            reject(error);
        })


    }








}