
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!


---Queries for set up---
Database name: roparoli

--use this query to create the user table
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);

--use this query to create the closet-bin table
CREATE TABLE "closet_bin" (
    "id" SERIAL PRIMARY KEY,
    "closet" BOOLEAN,
    "name" VARCHAR (80) NOT NULL,
    "user_id" INTEGER
);

--use this query to create the items table
CREATE TABLE "items" (
    "id" SERIAL PRIMARY KEY,
    "description" VARCHAR (50) NOT NULL,
    "size" VARCHAR (80) NOT NULL,
    "image" VARCHAR (150) NOT NULL,
    "closet_bin_id" INTEGER
);


---other queries used in development---
--query to add a new bin or closet
INSERT INTO closet_bin ( closet, name, user_id ) VALUES ( true, 'Gwen', 4 );
INSERT INTO closet_bin ( closet, name, user_id ) VALUES ( true, 'Hazel', 4 );
INSERT INTO closet_bin ( closet, name, user_id ) VALUES ( false, '5T +', 4 );
INSERT INTO closet_bin ( closet, name, user_id ) VALUES ( false, 'Gwen Out of Season', 4 );
INSERT INTO closet_bin ( closet, name, user_id ) VALUES ( false, '2T - 3T', 4 );
INSERT INTO closet_bin ( closet, name, user_id ) VALUES ( false, 'Hazel Out of Season', 4 );
INSERT INTO closet_bin ( closet, name, user_id ) VALUES ( false, 'NB - 18m', 4 );

--query to get all closets and bins for a specific user
SELECT * FROM closet_bin WHERE user_id = 4 AND closet = true;
SELECT * FROM closet_bin WHERE user_id = 4 AND closet = false;

--query to add items to a bin or closet
INSERT INTO items ( description, size, image, closet_bin_id ) VALUES ( 'Bluey Shirt', '4T', 'images/short_sleeve_shirt_icon.png', 1 );
INSERT INTO items ( description, size, image, closet_bin_id ) VALUES ( 'Yellow Tutu', 'S', 'images/skirt_icon.png', 1 );
INSERT INTO items ( description, size, image, closet_bin_id ) VALUES ( 'Flower Print Pants', '4T', 'images/pants_icon.png', 1 );
INSERT INTO items ( description, size, image, closet_bin_id ) VALUES ( 'Overalls', '5T', 'images/overalls_icon.png', 1 );
INSERT INTO items ( description, size, image, closet_bin_id ) VALUES ( 'Polkadot Dress', '4T', 'images/dress_icon.png', 1 );
INSERT INTO items ( description, size, image, closet_bin_id ) VALUES ( 'Pink Shorts', '4T', 'images/shorts_icon.png', 1 );

--query to update closet or bin name
UPDATE closet_bin SET name='Imelda' WHERE id = 34;

--query to select all closets and bins except the one the user is viewing
SELECT * FROM closet_bin WHERE user_id = 4 EXCEPT SELECT * FROM closet_bin WHERE id = 1;

--query to update which bin an item is in
UPDATE items SET closet_bin_id = 4 WHERE id = 2;

--query to delete and item
DELETE from items WHERE id = 14;



