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
    const pokemonId = Number(req.params.id);
    pokedex
      .getPokemon(pokemonId)
      .then((data) => {
        res.status(200).send(data.rows);
      })
      .catch((error) => {
        res.status(400).json({ error });
      });
  },
};

module.exports = pokedexController;
