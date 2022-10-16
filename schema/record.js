var mongoose = require('mongoose');



var RecordSchema = mongoose.Schema({
    Id:{
        type: String,
        required: true,
        trim: true,
        unique:true,
       
      },
      City : {
          type:String,
          required : true,
      },
      State : {
        type:String,
        required : true,
    },
      Country : {
        type:String,
        required : true,
      }
      ,
      Type : {
        type:String,
        required : true,
      },
      Lat : {
        type:mongoose.Types.Decimal128,
        required : false,
      },
      Lon : {
        type:mongoose.Types.Decimal128,
        required : false,
      },
      Timerecord : {
        type:Date,
        required : false,
      },
      aqius : {
        type:String,
        required : false,
      },
      mainus : {
        type:String,
        required : false,
      },
      aqicn : {
        type:String,
        required : false,
      },
      maincn : {
        type:String,
        required : false,
      },
      tp : {
        type:String,
        required : false,
      },
      pr : {
        type:String,
        required : false,
      },
      hu : {
        type:String,
        required : false,
      },
      ws : {
        type:String,
        required : false,
      },
      wd : {
        type:String,
        required : false,
      },
      ic : {
        type:String,
        required : false,
      }


});




var Record = mongoose.model('Record',RecordSchema);



module.exports = {
  Record
}