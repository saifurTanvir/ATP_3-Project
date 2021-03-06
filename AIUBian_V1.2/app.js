//Declaration

var express = require('express');
var app = express();
var ejs = require('ejs');
var bodyParser = require('body-parser');
var login = require('./controllers/login');
var signup = require('./controllers/signup');
var adminHome = require('./controllers/adminhome');
var addAdmin = require('./controllers/addAdmin');
var student = require('./controllers/student');
var faculty = require('./controllers/faculty');
//var logout = require('./controllers/logout');
//Configuration

app.set('view engine', 'ejs');

//MiddleWare
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended:true}));
app.use('/login',login);
app.use('/signup', signup);
app.use('/adminhome', adminHome);
app.use('/addAdmin',addAdmin);
app.use('/studentHome', student);
app.use('/facultyHome', faculty);


//Routers
app.get('/', function(request, response){
    response.send('Welcome to AIUBian Application');
});

//Server Startup

app.listen(3000, function(){
    console.log('AIUBian Server Started at Port No 3000!!!!');
});