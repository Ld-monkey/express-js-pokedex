-- Remove tables if exists
DROP TABLE IF EXISTS types, capture, pokemon_type;
DROP TABLE IF EXISTS dresseurs, pokemons, talents;

CREATE TABLE dresseurs (
  id_nom_dresseur integer GENERATED ALWAYS AS IDENTITY,
  nom_dresseur text NOT NULL UNIQUE,
  PRIMARY KEY (id_nom_dresseur)
);

CREATE TABLE talents (
  id_talent integer GENERATED ALWAYS AS IDENTITY,
  description text,
  PRIMARY KEY (id_talent)
);

CREATE TABLE pokemons (
  id_nom_pokemon integer GENERATED ALWAYS AS IDENTITY,
  id_talent integer,
  nom text NOT NULL UNIQUE,
  taille float NOT NULL,
  poids float NOT NULL,
  image text,
  PRIMARY KEY (id_nom_pokemon),
  FOREIGN KEY (id_talent) REFERENCES talents(id_talent)
);

CREATE TABLE types (
  id_libelle integer GENERATED ALWAYS AS IDENTITY,
  libelle text,
  PRIMARY KEY (id_libelle)
);

CREATE TABLE capture (
  id_nom_dresseur integer NOT NULL,
  id_nom_pokemon integer NOT NULL,
  FOREIGN KEY (id_nom_dresseur) REFERENCES dresseurs(id_nom_dresseur),
  FOREIGN KEY (id_nom_pokemon) REFERENCES pokemons(id_nom_pokemon)
);

CREATE TABLE pokemon_type (
  id_nom_pokemon integer NOT NULL,
  id_libelle integer NOT NULL,
  FOREIGN KEY (id_nom_pokemon) REFERENCES pokemons(id_nom_pokemon),
  FOREIGN KEY (id_libelle) REFERENCES types(id_libelle)
);