module.exports.iniciaChat = function(app, req, res){
    var dadosForm = req.body;

    req.assert('apelido', 'Nome ou Apelido é obrigatório').notEmpty();
    req.assert('apelido', 'Nome ou Apelido deve contrer emtre 3 e 15 caractes').len(3, 15);

    var erros = req.validationErrors();

    if(erros){
        res.render('index', {validacao: erros})
        return;
    }

    app.get('io').emit(
        'msgParaCliente',
        {apelido: dadosForm.apelido, mensagem: " acabou de entrar"}
    )

    res.render('chat', {dadosForm: dadosForm});
}