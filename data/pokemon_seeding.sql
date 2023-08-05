TRUNCATE TABLE pokemons, talents, dresseurs, capture, types, pokemon_type RESTART IDENTITY;

INSERT INTO talents (description) VALUES
    ('Engrais'),
    ('Brasier'),
    ('Torrent'),
    ('Ecran Poudre');

INSERT INTO pokemons (nom, taille, poids, id_talent, image) VALUES
    ('Bulbizarre', 0.7, 6.9, 1, '/images/001.png'),
    ('Herbizarre', 1.0, 13.0, 1, '/images/002.png'),
    ('Florizarre', 2.0, 100.0, 1, '/images/003.png'),
    ('Salamèche', 0.6, 8.5, 2, '/images/004.png'),
    ('Reptincel', 1.1, 19.0, 2, '/images/005.png'),
    ('Dracaufeu', 1.7, 90.5, 2, '/images/006.png'),
    ('Carapuce', 0.5, 9.0, 3, '/images/007.png'),
    ('Carabaffe', 1.0, 22.5, 3, '/images/008.png'),
    ('Tortank', 1.6, 88.5, 3, '/images/009.png'),
    ('Chenipan', 0.3, 2.9, 4, '/images/010.png');

INSERT INTO dresseurs (nom_dresseur) VALUES
    ('Pierre'),
    ('Ondine'),
    ('Major Bob'),
    ('Erika'),
    ('Morgane'),
    ('Auguste'),
    ('Giovanni'),
    ('Olga'),
    ('Aldo'),
    ('Peter');

INSERT INTO capture (id_dresseur, id_pokemon) VALUES 
    (1, 1),
    (1, 10),
    (1, 4),
    (2, 7),
    (3, 9);

INSERT INTO "types" (libelle) VALUES
    ('Combat'),
    ('Dragon'),
    ('Eau'),
    ('Electrique'),
    ('Feu'),
    ('Glace'),
    ('Insecte'),
    ('Normal'),
    ('Plante'),
    ('Poison'),
    ('Psy'),
    ('Roche'),
    ('Sol'),
    ('Spectre'),
    ('Vol');

INSERT INTO pokemon_type (id_pokemon, id_libelle) VALUES 
    (1, 9),
    (1, 10),
    (2, 9),
    (2, 10),
    (3, 9),
    (3, 10),
    (4, 5),
    (5, 5),
    (6, 5),
    (7, 3),
    (8, 3),
    (9, 3),
    (10, 7);