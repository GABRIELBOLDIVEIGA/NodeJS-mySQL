const database = require('../models');

class MatriculasController {
  static async createMatricula(req, res) {
    try {
      const matricula = await database.Matriculas.create(req.body);
      return res.status(200).json(matricula);
    } catch (error) {
      return res.status(500).json(error.message);
    };
  };

  static async getMatriculas(req, res) {
    try {
      const matriculas = await database.Matriculas.findAll();
      return res.status(200).json(matriculas);
    } catch (error) {
      return res.status(500).json(error.message);
    };
  };

  static async getMatriculaById(req, res) {
    const { id } = req.params;
    try {
      const matricula = await database.Matriculas.findOne({ where: { id: Number(id) } });
      return res.status(200).json(matricula);
    } catch (error) {
      return res.status(500).json(error.message);
    };
  };

  static async updateMatricula(req, res) {
    const { id } = req.params;
    const novasInfos = req.body;
    try {
      await database.Matriculas.update(novasInfos, { where: { id: Number(id) } });
      const matricula = await database.Matriculas.findOne({ where: { id: Number(id) } });
      return res.status(200).json(matricula);
    } catch (error) {
      return res.status(500).json(error.message);
    };
  };

  static async deleteMatricula(req, res) {
    const { id } = req.params;
    try {
      await database.Matriculas.destroy({ where: { id: Number(id) } });
      return res.status(200).json(`Matricula de ID ${id} deletada.`)
    } catch (error) {
      return res.status(500).json(error.message);
    };
  };
}

module.exports = MatriculasController;