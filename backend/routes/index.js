let express = require("express")
let app = express();
let router = express.Router();
let EmpresaController = require("../controllers/EmpresaController");


router.get('/empresas', EmpresaController.index);


module.exports = router;