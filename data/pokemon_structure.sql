BEGIN;

DROP TABLE IF EXISTS types, capture, pokemon_type;
DROP TABLE IF EXISTS dresseurs, pokemons, talents;

CREATE TABLE dresseurs (
  id integer GENERATED ALWAYS AS IDENTITY,
  nom_dresseur text NOT NULL UNIQUE,
  PRIMARY KEY (id)
);

CREATE TABLE talents (
  id integer GENERATED ALWAYS AS IDENTITY,
  description text,
  PRIMARY KEY (id)
);

CREATE TABLE pokemons (
  id integer GENERATED ALWAYS AS IDENTITY,
  id_talent integer,
  nom text NOT NULL UNIQUE,
  taille float NOT NULL,
  poids float NOT NULL,
  image text,
  PRIMARY KEY (id),
  FOREIGN KEY (id_talent) REFERENCES talents(id)
);

CREATE TABLE "types" (
  id integer GENERATED ALWAYS AS IDENTITY,
  libelle text,
  PRIMARY KEY (id)
);

CREATE TABLE capture (
  id_dresseur integer NOT NULL,
  id_pokemon integer NOT NULL,
  FOREIGN KEY (id_dresseur) REFERENCES dresseurs(id) ON DELETE CASCADE,
  FOREIGN KEY (id_pokemon) REFERENCES pokemons(id) ON DELETE CASCADE
);

CREATE TABLE pokemon_type (
  id_pokemon integer NOT NULL,
  id_libelle integer NOT NULL,
  FOREIGN KEY (id_pokemon) REFERENCES pokemons(id),
  FOREIGN KEY (id_libelle) REFERENCES types(id)
);

COMMIT;