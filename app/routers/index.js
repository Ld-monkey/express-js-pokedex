const express = require('express');
const pokedexController = require('../controllers/pokedexController');
const dresseurController = require('../controllers/dresseurController');

const router = express.Router();

router.get('/pokemons', pokedexController.getAllPokemons);
router.get('/pokemon/:id', pokedexController.getPokemonsById);

router.get('/dresseurs/', dresseurController.getAllDresseurs);
router.get('/dresseur/:id', dresseurController.getDresseurById);
router.post('/dresseur/', dresseurController.createDresseur);

module.exports = router;
