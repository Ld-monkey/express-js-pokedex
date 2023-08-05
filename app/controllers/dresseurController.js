const dresseur = require('../models/dresseur');

const dresseurController = {
  async getAllDresseurs(req, res) {
    dresseur
      .getDresseurs()
      .then((data) => {
        res.status(200).send(data.rows);
      })
      .catch((error) => {
        res.status(400).json({ error });
      });
  },

  async getDresseurById(req, res) {
    const dresseurId = Number(req.params.id);
    dresseur
      .getDresseuById(dresseurId)
      .then((data) => {
        res.status(200).send(data.rows);
      })
      .catch((error) => {
        res.status(400).json({ error });
      });
  },

  async createDresseur(req, res) {
    const dresseurName = req.body.nom;

    dresseur
      .createDresseur(dresseurName)
      .then(() => res.json({ status: 'success' }))
      .catch((error) => {
        res.status(400).json({ error });
      });
  },

  async updateDresseur(req, res) {
    const { id } = req.params;
    const { name } = req.query;

    dresseur
      .updateDresseur(id, name)
      .then((data) => {
        res.status(200).send(data.rows);
      })
      .catch((error) => {
        res.status(400).json({ error });
      });
  },

  async deleteDresseur(req, res) {
    const { id } = req.params;

    dresseur
      .removeDresseur(id)
      .then(() => res.json({ status: 'success' }))
      .catch((error) => {
        res.status(400).json({ error });
      });
  },
};

module.exports = dresseurController;
