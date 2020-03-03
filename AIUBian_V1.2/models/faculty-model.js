var db = require('./db');
 
module.exports= {
	getById : function(id, callback){
		var sql = "select * from post where id=?";
		db.getResults(sql, [id], function(results){
			if(results.length > 0){
				callback(results[0]);
			}else{
				callback(null);
			}
		});
	},
	getAll : function(callback){
		var sql = "select * from post";
		db.getResults(sql, null, function(results){
			if(results.length > 0){
				callback(results);
			}else{
				callback([]);
			}
		});
	},
	validate: function(user, callback){
		var sql ="SELECT * FROM post where username=? and password=?";
		db.getResults(sql, [user.username, user.password], function(results){

			if(results.length > 0){
				callback(true);
			}else{
				callback(false);
			}
		});
	},
	getByStatus: function(status, callback){
		var sql = "select * from post where Status=?";
		db.getResults(sql, [status], function(results){
			if(results.length > 0){
				callback(results);
			}else{
				callback([]);
			}
		});
	},
	insert: function(user, callback){
		var sql = "insert into post values(?,?,?,?)";
		db.execute(sql, [null, user.username, user.password, user.type], function(status){
			if(status){
				callback(true);
			}else{
				callback(false);
			}
		});
	},
	updateLike : function(user, callback){
		var sql = "update post set Likes=? where PostID=?";
		db.execute(sql, [user.like, user.id], function(status){
			var data = user.like + " " +user.id;
			console.log(data);
			if(status){
				callback(true);
			}else{
				callback(false);
			}
		});
	},
	delete: function(user, callback){
		var sql = "delete from post where id=?";
		db.execute(sql, [user], function(status){
			if(status){
				callback(true);
			}else{
				callback(false);
			}
		});
	}
}