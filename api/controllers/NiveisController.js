const database = require('../models');

class NiveisController {

  static async createNivel(req, res) {
    try {
      const nivel = await database.Niveis.create(req.body);
      return res.status(200).json(nivel);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  };

  static async getNiveis(req, res) {
    try {
      const niveis = await database.Niveis.findAll();
      return res.status(200).json(niveis);
    } catch (error) {
      return res.status(500).json(error.message);
    };
  };

  static async findNivelById(req, res) {
    const { id } = req.params;
    try {
      const nivel = await database.Niveis.findOne({
        where: {
          id: Number(id),
        },
      });
      return res.status(200).json(nivel);
    } catch (error) {
      return res.status(500).json(error.message);
    };
  };

  static async updateNivelById(req, res) { 
    const { id } = req.params;
    const novasInfo = req.body;
    try {
      await database.Niveis.update(novasInfo, { where: { id: Number(id) } })  
      const nivelAtualizado = await database.Niveis.findOne({
        where: {
          id: Number(id),
        },
      });
      return res.status(200).json(nivelAtualizado);
    } catch (error) {
      return res.status(500).json(error.message);
    };
  };

  static async deleteNivelById(req, res) { 
    const { id } = req.params;
    try {
      await database.Niveis.destroy({ where: { id: Number(id) } });
      return res.status(200).json(`Nivel de ID ${id} deletado.`)
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
}

module.exports = NiveisController;