const express = require('express');
const bodyParser = require("body-parser"); 

// database connect
const connection = require('./models/db')

const app = express();

app.use(express.static('public'));
app.set("view engine", "ejs"); 
app.use(bodyParser.urlencoded({extended: true})); 


app.get('/', (req, res) => {
  connection.query(
    'SELECT * FROM bincomphptest',
    (error, results) => {
      console.log(results);
      res.render('index');
    }
  );
  
});

// app.get('/index', (req, res) => {
//   connection.query(
//     'SELECT * FROM items',
//     (error, results) => {
//       // Pass an object as the second argument of res.render
//       res.render('index.ejs', {items: results});
//     }
//   );
// });

// Server
app.listen(2000, ()=> {
    console.log("Server Connected @2000")
});