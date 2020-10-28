## Poll app
This app is a Dummy Poll Result that helps people to view polling units and local government results as they are trooping in. They can also register thier respective new polling units. 
This will go a long way to improve voting system. 


To run or contribute to this project
## Local Setup 
###  Requirements 
* Node ( v 12 is recommended)
* Mysql

### Setup Steps 
* Fork repo 
* Clone your fork to your local environment
* run `cd test-poll` in the terminal
* run `git remote add upstream https://github.com/Zeeson/test-poll.git`
* run `npm install` in the terminal
* run `npm start` in the terminal
* Before you push any code, always run `git pull upstream test-poll`

To setup the database (locally)
Note: This project used MYSQL for database setup

* create a database (bincomphptest);
* use the database;
* import bincom_test.sql file (located in the database dir of the project) in to bincomphptest database;
* In the db.config.js file, located inside config dir. input your database password in the password field. 
    * check to make sure that your database user name is ROOT. 

