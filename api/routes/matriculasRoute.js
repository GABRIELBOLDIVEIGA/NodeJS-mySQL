const { Router } = require('express')

const MatriculasController = require('../controllers/MatriculasController');

const router = Router();

router.post('/matriculas', MatriculasController.createMatricula);
router.get('/matriculas', MatriculasController.getMatriculas);
router.get('/matriculas/:id', MatriculasController.getMatriculaById);
router.put('/matriculas/:id', MatriculasController.updateMatricula);
router.delete('/matriculas/:id', MatriculasController.deleteMatricula);

module.exports = router;