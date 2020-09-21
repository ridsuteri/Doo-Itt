const { static } = require('express');
// required express module
const express=require('express');

//selecting the port  
const port=8000;

const app=express();

// set up view engine as ejs
app.set('view engine','ejs');
app.set('views','./views');

// used static files
app.use(express.static('./assets'));

// used express routes
app.get('/',require('./routes/index'));

// app listening on port
app.listen(port,function(err){
    if(err){
        console.log('Error Running the Server !');
        return;
    }
    console.log('Server is up and running on port : ',port)
});