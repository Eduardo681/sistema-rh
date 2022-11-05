let express = require("express")
let app = express();
let router = express.Router();
let EmpresaController = require("../controllers/EmpresaController");
let PerguntasController = require("../controllers/PerguntasController");
let VagasController = require("../controllers/VagasController");


router.get('/empresas', EmpresaController.findAll);
router.get('/empresa/:id', EmpresaController.findEmpresa);
router.put('/empresa', EmpresaController.edit);
router.get('/perguntas', PerguntasController.findAll);
router.get('/perguntas/:tipo', PerguntasController.findTipo);
router.get('/pergunta/:id', PerguntasController.findPergunta);
router.delete('/pergunta/:id', PerguntasController.delete);
router.put('/pergunta', PerguntasController.edit);
router.post('/pergunta', PerguntasController.create);
router.get('/vagas', VagasController.findAll);
router.post('/vaga', VagasController.create);
router.get('/vaga/:id', VagasController.findVaga);
router.put('/vaga', VagasController.edit);
router.delete('/vaga/:id', VagasController.delete);


module.exports = router;