const { Router } = require('express');

const NiveisController = require('../controllers/NiveisController')

const router = Router()

router.post('/niveis', NiveisController.createNivel);
router.get('/niveis', NiveisController.getNiveis);
router.get('/niveis/:id', NiveisController.findNivelById);
router.put('/niveis/:id', NiveisController.updateNivelById);
router.delete('/niveis/:id', NiveisController.deleteNivelById);

module.exports = router;