
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);
--use this query to create the closet-bin table
CREATE TABLE "closet-bin" (
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
    "closet-bin_id" INTEGER
);