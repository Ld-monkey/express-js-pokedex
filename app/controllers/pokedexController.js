const pokedex = require('../models/pokedex');

const pokedexController = {
  async getAllPokemons(req, res) {
    pokedex
      .getPokemons()
      .then((data) => {
        res.status(200).send(data.rows);
      })
      .catch((error) => {
        res.status(400).json({ error });
      });
  },

  async getPokemonsById(req, res) {
    const { id } = req.params;

    pokedex
      .getPokemon(id)
      .then((data) => {
        res.status(200).send(data.rows);
      })
      .catch((error) => {
        res.status(400).json({ error });
      });
  },
};

module.exports = pokedexController;
