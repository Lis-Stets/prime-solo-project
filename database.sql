
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
Database name: roparoli

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

--query to add a new bin or closet
INSERT INTO closet_bin ( closet, name, user_id ) VALUES ( true, 'Gwen', 4 );

--query to get all closets and bins for a specific user
SELECT * FROM closet_bin WHERE user_id = 4;

--query to updat closet or bin name
UPDATE closet_bin SET name='Imelda' WHERE id = 34;
