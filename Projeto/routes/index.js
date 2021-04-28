var express = require('express');
const Doacao = require('../entities/doacao');
const Response = require('../entities/response');
const validarDoacao = require('../services/validarDoacao');
var router = express.Router();

/* GET home page. */
router.post('/fazerDoacao', function(req, res, next) {
  var doacao = new Doacao(
    req.body.Valor, 
    req.body.NomeInstituicao, 
    req.body.CpfDoador,
    req.body.NomeDoador
  );
  var response = new Response();
  var data = validarDoacao.ValidarDoacao(doacao);
  response.addInfo(data);
  res.json(response);
});

module.exports = router;
