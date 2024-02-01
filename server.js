const dontev = require('dotenv');
dontev.config({path:'./imp.env'});
const app = require('./app')
const mongoose = require('mongoose')


mongoose.connect(process.env.db_link, {
    useNewUrlParser: true
}).then((conn) => {
    console.log(conn);
    console.log("successful");
}).catch((error) => {
    console.log(error);
});



app.listen(8000,()=>{
    console.log("server started");
})