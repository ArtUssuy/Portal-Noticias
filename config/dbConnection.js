var mysql = require('mysql');

var connMySQL = function(){
	return mysql.createConnection({
		host : 'localhost',
		user : 'Ussuy',
		password : '1234',
		database : 'estudos_node'
	});
}

module.exports = function(){
	return connMySQL;
}

