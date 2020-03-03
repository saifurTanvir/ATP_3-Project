var express = require('express');
var facultyModel = require.main.require("./models/faculty-model"); 
var router = express.Router();

router.get('/', function(req, res){
	facultyModel.getAll(function(results){
		if(results.length > 0){
			res.render('faculty/index', {userlist: results});
		}else{
			res.redirect('/login');
		}
	});
    
});

router.get('/facultyProfile', function(req, res){
    res.render('faculty/facultyProfile');
});


router.get('/editProfile', function(req, res){
    res.render('faculty/editProfile');
});

router.get('/timeLine', function(req, res){
    res.render('faculty/timeLine');
});

router.get('/chat', function(req, res){
    res.render('faculty/chat');
});

router.get('/settings', function(req, res){
    res.render('faculty/settings');
});


router.post('/facultyPost', function(req, res){
	facultyModel.getByStatus("Faculty", function(results){
		if(results.length > 0){
			res.render('faculty/index', {userlist: results});
		}else{
			res.redirect('/login');
		}
	});
});
router.post('/almuniPost', function(req, res){
    facultyModel.getByStatus("Almuni", function(results){
		if(results.length > 0){
			res.render('faculty/index', {userlist: results});
		}else{
			res.redirect('/login');
		}
	});
});
router.post('/studentPost', function(req, res){
    facultyModel.getByStatus("Student", function(results){
		if(results.length > 0){
			res.render('faculty/index', {userlist: results});
		}else{
			res.redirect('/login');
		}
	});
});
router.post('/jobOrInternPost', function(req, res){
    facultyModel.getByStatus("Faculty", function(results){
		if(results.length > 0){
			res.render('faculty/index', {userlist: results});
		}else{
			res.redirect('/login');
		}
	});
});

router.post("/likeExe", function(req, res){
	console.log(req.body.id);
	var user = {
		like : req.body.like,
		id : req.body.id
	};

	facultyModel.updateLike(user, function(status){	
		if(status){
			res.send(true);
		}
	});
});


module.exports = router;