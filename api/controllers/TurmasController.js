const database = require('../models');

class TurmasController { 
  static async createTurma(req, res) { 
    try {
      const turma = await database.Turmas.create(req.body);
      return res.status(200).json(turma);
    } catch (error) {
      return res.status(500).json(error.message);  
    };
  };

  static async getTurmas(req, res) { 
    try {
      const turmas = await database.Turmas.findAll();
      return res.status(200).json(turmas);
    } catch (error) {
      return res.status(500).json(error.message);
    };
  };
}

module.exports = TurmasController;