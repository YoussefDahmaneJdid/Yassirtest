var mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose 
 .connect(process.env.MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,   })   
 .then(() => console.log("Database connected!"))
 .catch(err => console.log(err));
//mongodb+srv://admin:azAZaz123@cluster0.5zenl.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
module.exports = {
  mongoose
}