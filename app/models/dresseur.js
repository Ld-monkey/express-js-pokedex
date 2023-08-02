const client = require('./client');

const dresseur = {
  async getDresseurs() {
    const dresseurs = await client.query(`
    SELECT * FROM dresseurs;
    `);
    return dresseurs;
  },

  async getDresseuById(dresseurId) {
    const oneDresseur = await client.query(`
    SELECT * FROM dresseurs
    WHERE id_nom_dresseur = ${dresseurId};
    `);
    return oneDresseur;
  },

  async createDresseur(dresseurName) {
    const addDresseur = await client.query(`
    INSERT INTO dresseurs (nom_dresseur) VALUES ('${dresseurName}');
    `);
    return addDresseur;
  },
};

module.exports = dresseur;
