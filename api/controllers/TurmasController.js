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

  static async getTurmaById(req, res) {
    const { id } = req.params;
    try {
      const turma = await database.Turmas.findOne({ where: { id: Number(id) } });
      return res.status(200).json(turma);
    } catch (error) {
      return res.status(500).json(error.message);
    };
  };

  static async updateTurma(req, res) {
    const { id } = req.params;
    const novasInfos = req.body;
    try {
      await database.Turmas.update(novasInfos, { where: { id: Number(id) } });
      const turma = await database.Turmas.findOne({ where: { id: Number(id) } });
      return res.status(200).json(turma);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  };

  static async deleteTurma(req, res) { 
    const { id } = req.params;
    try {
      await database.Turmas.destroy({ where: { id: Number(id) } });
      return res.status(200).json(`Turma de ID ${id} deletada.`);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
}

module.exports = TurmasController;