const database = require('../models')

class PessoaController {
  static async pegaTodasAsPessoas(req, res) {
    try {
      const todasAsPessoas = await database.Pessoas.findAll()
      return res.status(200).json(todasAsPessoas)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async pegaUmaPessoa(req, res) {
    const { id } = req.params
    try {
      const umaPessoa = await database.Pessoas.findOne({
        where: {
          id: Number(id)
        }
      })
      return res.status(200).json(umaPessoa)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async criaPessoa(req, res) {
    try {
      const criaPessoa = await database.Pessoas.create(req.body)
      return res.status(200).json(criaPessoa)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async atualizaPessoa(req, res) {
    const { id } = req.params
    const novasInfo = req.body
    try {
      await database.Pessoas.update(novasInfo, { where: { id: Number(id) } })
      const pessoaAtualizada = await database.Pessoas.findOne({
        where: {
          id: Number(id)
        }
      })
      return res.status(200).json(pessoaAtualizada)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async deletaPessoa(req, res) { 
    const { id } = req.params

    try {
      await database.Pessoas.destroy({ where: { id: Number(id) } })
      return res.status(200).json({ message : `Pessoa de id: ${id} foi deletado`})
    } catch (error) {
      return res.status(500).json(error.message);
    }

  }

}

module.exports = PessoaController