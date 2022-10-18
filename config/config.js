var env = process.env.NODE_ENV || 'development'
console.log(env);
if(env === "development"){
    process.env.MONGODB_URI = 'mongodb://127.0.0.1:27017/yassirdev', { useNewUrlParser: true }
    process.env.PORT= 5000;
 } else if(env === "test"){
    process.env.MONGODB_URI = 'mongodb://localhost:27017/yassirtest', { useNewUrlParser: true }
    process.env.PORT= 5000;
 }