

const request = require('supertest');
const {ObjectID} = require('mongodb');
var {app} = require('../app');

var expect = require('Chai').expect
const { Record } = require('../schema/record');

//////////////////////////////////////////////////:


describe('/getRecord',()=>{
    it.only('should return A record of nearest city',(done)=>{

    request(app)
     .get('/air/48.856613/2.352222')
     .expect(200)
     .expect((res,req)=>{
        console.log(req);
        console.log(res.text); 
        res = JSON.parse(res.text);
        console.log(res.data.city);
        expect(res.data.city).to.equal('Paris');
         
     }).end(done);
    })

})