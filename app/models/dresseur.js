const client = require('./client');

const dresseur = {
  async getDresseurs() {
    const dresseurs = await client.query(`
    SELECT * FROM dresseurs;
    `);
    return dresseurs;
  },

  async getDresseuById(dresseurId) {
    const oneDresseur = await client.query(
      `
    SELECT * FROM dresseurs
    WHERE id = $1;
    `,
      [dresseurId]
    );
    return oneDresseur;
  },

  async createDresseur(dresseurName) {
    const addDresseur = await client.query(
      `
    INSERT INTO dresseurs (nom_dresseur) VALUES ($1);
    `,
      [dresseurName]
    );
    return addDresseur;
  },

  async updateDresseur(dresseurId, dresseurName) {
    const newDresseur = await client.query(
      `
    UPDATE dresseurs
    SET nom_dresseur = $1
    WHERE id = $2
    RETURNING *;
    `,
      [dresseurName, dresseurId]
    );
    return newDresseur;
  },

  async removeDresseur(dresseurId) {
    const rmDresseur = await client.query(
      `
    DELETE FROM dresseurs
    WHERE id = $1;
    `,
      [dresseurId]
    );
    return rmDresseur;
  },
};

// SELECT nom_dresseur, nom, taille, poids, image
// FROM dresseurs
// JOIN capture
// ON dresseurs.id_nom_dresseur = capture.id_nom_dresseur
// JOIN pokemons
// ON pokemons.id_nom_pokemon = capture.id_nom_pokemon;

module.exports = dresseur;
