module.exports.form_add_noticia = function(application, req, res){

	res.render('admin/form_add_noticia', {validacao : {}, noticia : {}});

}

module.exports.salvar_noticia = function(application, req, res){

	var noticia = req.body;

	req.assert('titulo', 'Título obrigatório').notEmpty();
	req.assert('resumo', 'Resumo obrigatório').notEmpty();
	req.assert('autor', 'Autor obrigatório').notEmpty();
	req.assert('data_noticia', 'Data obrigatória').notEmpty().isDate({format: 'YYYY-MM-DD'});
	req.assert('noticia', 'Notícia obrigatória').notEmpty();

	var erros = req.validationErrors();

	if(erros){
		res.render('admin/form_add_noticia', {validacao : erros, noticia : noticia});
		return;

	}

	var connection = application.config.dbConnection();
	var salvarDAO = new application.app.models.noticiasDAO(connection);

	salvarDAO.salvarNoticia(noticia, function(error, result){
		res.redirect('/noticias');
	});

}

