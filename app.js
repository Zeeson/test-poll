const express = require('express');
const bodyParser = require("body-parser"); 

const route = require("./routes/index")
const app = express();
const PORT = process.env.PORT || 2000 

app.use(express.static('public'));
app.set("view engine", "ejs"); 
app.use(bodyParser.urlencoded({extended: true})); 
app.use("/", route)

// Server Listen
app.listen(PORT, ()=> {
    console.log(`Server Connected ${PORT}`)
});