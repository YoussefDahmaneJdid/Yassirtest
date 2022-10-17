
const { ObjectId } = require('mongodb');


const { Record } = require('./../../models/record');



var dateTime = new Date();


const record = [{
    Id: ObjectId,
    DateTime: dateTime,
    City: 'marseille',
    State: 'marseille',
    Country: 'france',
    Type: 'Point',
    Lat: 8.4903,
    Lon: 9.093083,
    Timerecord: dateTime,
    aqius: data.data.current.pollution.aqius,
    mainus: data.data.current.pollution.mainus,
    aqicn: data.data.current.pollution.aqicn,
    maincn: data.data.current.pollution.maincn,
    tp: data.data.current.weather.tp,
    pr: data.data.current.weather.pr,
    hu: data.data.current.weather.hu,
    ws: data.data.current.weather.ws,
    wd: data.data.current.weather.wd,
    ic: data.data.current.weather.ic,


}, {
    _id: new ObjectId(),
    NOM: "julien",
    PRENOM: 'ilyass',
    DEPARTEMENT: 'marketing',
    DATE_ENTREE: dateTime,
    IDENTIFIANT_EMPLOYEE: new ObjectId()

},
{
    _id: new ObjectId(),
    NOM: "julien",
    PRENOM: 'ilyass',
    DEPARTEMENT: 'data',
    DATE_ENTREE: dateTime,
    IDENTIFIANT_EMPLOYEE: new ObjectId()

},
{
    _id: new ObjectId(),
    NOM: "julien",
    PRENOM: 'ilyass',
    DEPARTEMENT: 'datas',
    DATE_ENTREE: dateTime,
    IDENTIFIANT_EMPLOYEE: new ObjectId()

}];


var populateEmployees = (done) => {
    Record.remove({}).then(() => {
        return Record.insertMany(employees);
    }).then(() => done());

}



module.exports = {

    populateEmployees,
    employees
}