const express = require('express');
const path = require('path');
const morgan = require('morgan');
const app = express();
const mysql = require('mysql');
const myConnection = require('express-myconnection');


// importing routes
const productoRoutes = require('./routes/producto');

//settings
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// middlewares
app.use(morgan('dev'));
app.use(myConnection(mysql, {
  host: 'bzhoi8nneonjhmabzyif-mysql.services.clever-cloud.com',
  user: 'ue9pvegupkqn15xi',
  password: 'fMJlo91vKJH08OKQ42mM',
  port: 3306,
  database: 'bzhoi8nneonjhmabzyif'
}, 'single'));
app.use(express.urlencoded({extended: false}));

// routes
app.use('/', productoRoutes);


// starting the server
app.listen(app.get('port'), () => {
    console.log(`server on port ${app.get('port')}`);
  });
  // static files
app.use(express.static(path.join(__dirname, 'public')));