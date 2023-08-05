const client = require('./client');

const pokedex = {
  async getPokemons() {
    const pokemons = await client.query(`
    SELECT * FROM pokemons;
    `);
    return pokemons;
  },

  async getPokemon(pokemonId) {
    const pokemon = await client.query(`
    SELECT * FROM pokemons
    WHERE id = $1;
    `, [pokemonId]);
    return pokemon;
  },
};

module.exports = pokedex;
