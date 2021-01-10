
const express=require('express');
const app = express();
const port = process.env.PORT || 3000


const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());


const path = require('path')
// public directory path
const publicDirectoryPath = path.join(__dirname, '/public')

// Static directory
app.use(express.static(publicDirectoryPath))

app.set('view engine','ejs');
//app.set('views','./folder_blog/views');


const mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_URL , {
    useNewUrlParser : true
}).then(() => {
    console.log("Db is connected")
}).catch((err) =>{
    console.log(err)
    process.exit()
})


app.use('/',require('./router/routes'))

app.listen(port,()=>console.log("port active at "+port));