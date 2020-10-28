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
    'SELECT * FROM announced_pu_results ',
    (error, results) => {
      console.log(results);
      res.render('index', {items: results});
    }
  );
});

app.get('/lga', (req, res) => {
  connection.query(
    'SELECT * FROM lga',
    (error, results) => {
      console.log(results)
      res.render('lga', {items: results});
    }
  );
});

app.get('/new', (req, res) => {
  connection.query(
    "SELECT party_abbreviation from announced_pu_results", 
    (err, results) => {
      res.render('new', {items: results});
    }
  )
});

app.post('/post', (req, res) => {
  connection.query("Select * from announced_pu_results WHERE polling_unit_uniquid = ?" [polling_unit_uniqid], function(err, rows) {
    if(err){
      console.log(err)
    } if (rows.length){
      return done(null, false, req.flash("The polling unit is already updated"))
    } else {
      const {result_id, polling_unit_uniquid, party_abbreviation, party_score, entered_by_user} = req.body
      let newResult = {
        result_id, 
        polling_unit_uniquid, 
        party_abbreviation, 
        party_score, 
        entered_by_user,
      }
      const insertResult = 'INSERT INTO announced_pu_results ( result_id, polling_unit_uniquid, party_abbreviation, party_score, entered_by_user) VALUES (?, ?)'
      res.send(connection.query(insertResult,[newResult],function(err, rows) {
        newResult.id = rows.insertId;
        // return done(null, newResult);
        res.redirect("/");
      }));
    }
  })
})


// Server
app.listen(2000, ()=> {
    console.log("Server Connected @2000")
});