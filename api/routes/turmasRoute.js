const { Router } = require('express')

const TurmasController = require('../controllers/TurmasController');

const router = Router();

router.post('/turmas', TurmasController.createTurma);
router.get('/turmas', TurmasController.getTurmas);

module.exports = router;