module.exports.noticias = function(application, req, res){

	var connection = application.config.dbConnection();
	var noticiasDAO = new application.app.models.noticiasDAO(connection);

	noticiasDAO.getNoticias(function(error, result){
		res.render('noticias/noticias', {noticias : result});
	});
}



module.exports.noticia = function(application, req, res){
	
	var connection = application.config.dbConnection();
	var noticiaDAO = new application.app.models.noticiasDAO(connection);

	noticiaDAO.getNoticia(function(error, result){
		res.render('noticias/noticia', {noticia : result});
	});

}