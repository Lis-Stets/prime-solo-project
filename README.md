<!-- ![MIT LICENSE](https://img.shields.io/github/license/scottbromander/the_marketplace.svg?style=flat-square) -->
![REPO SIZE](https://img.shields.io/github/repo-size/scottbromander/the_marketplace.svg?style=flat-square)
![TOP_LANGUAGE](https://img.shields.io/github/languages/top/scottbromander/the_marketplace.svg?style=flat-square)
![FORKS](https://img.shields.io/github/forks/scottbromander/the_marketplace.svg?style=social)

# ROPAROLI

## Description

_Duration: 3 Week Sprint_

This is my independent full stack development project streamlining children’s wardrobe management and clothing organization.

Keeping track of what clothes kids have, and in what sizes, and for which seasons is nigh impossible. Parents get lots of hand-me-downs, which don't always fit their oldest yet, which need to be stored. Then parents may need to store hand-me-downs for their next child until they grow into them. This application will allow parents to see what clothes they have, in what sizes, and if they are for warm weather or for cold weather. They can easily move clothes between their kid’s closet and the storage bins as their child grows and the seasons change. If something no longer fits their youngest, or if it is destroyed beyond wearing, they can delete it entirely. 

Technologies used: HTML, React.js, CSS, Material UI, Redux.js, Redux-Saga.js, Axios, Node.js, Express.js, PostgreSQL, Postico

## Screen Shot

![Log in and add item](https://i.makeagif.com/media/9-16-2022/lxv2zW.gif "roparoli_part_1")
![Move item](https://i.makeagif.com/media/9-16-2022/QecxB6.gif "roparoli_part_2")
![Delete item](https://i.makeagif.com/media/9-16-2022/IFQKUD.gif "roparoli_part_3")
![Create new closet or storage bin](https://i.makeagif.com/media/9-16-2022/MerYYw.gif "roparoli_part_4")

### Prerequisites

- [Node.js](https://nodejs.org/en/)
- [PostrgeSQL](https://www.postgresql.org/)
- [Nodemon](https://nodemon.io/)

## Installation

If your application has secret keys (for example --  Twilio), make sure you tell them how to set that up, both in getting the key and then what to call it in the `.env` file.

### Create database and table

- Create a new database called `roparoli`

If you would like to name your database something else, you will need to change `prime_app` to the name of your new database name in `server/modules/pool.js`

- The queries in the `database.sql` file are set up to create all the necessary tables and populate the needed data to allow the application to run correctly. The project is built on [Postgres](https://www.postgresql.org/download/), so you will need to make sure to have that installed. We recommend using Postico to run those queries as that was used to create the queries, 

### Development Setup Instructions

- Run `npm install`
- Create a `.env` file at the root of the project and paste this line into the file:
  ```
  SERVER_SESSION_SECRET=superDuperSecret
  ```
  While you're in your new `.env` file, take the time to replace `superDuperSecret` with some long random string like `25POUbVtx6RKVNWszd9ERB9Bb6` to keep your application secure. Here's a site that can help you: [https://passwordsgenerator.net/](https://passwordsgenerator.net/). If you don't do this step, create a secret with less than eight characters, or leave it as `superDuperSecret`, you will get a warning.
- Start postgres if not running already by using `brew services start postgresql`
- Run `npm run server` in your terminal
- Run `npm run client` in your terminal
- The `npm run client` command will open up a new browser tab for you!

## Usage
How does someone use this application? Tell a user story here.

1. Upon arriving at the website, the user can register to creat an account. 
2. They will then be able to create closets and storage bins to reflect their current clothing storage system.
3. They can add any clothing items currently in their children's wardrobes, and record what items they have in storage.
4. When it comes time to hand-me-down an article of clothing, or change out seasonal clothing, the user can easily move an item to the correct closet or bin.
5. If an article of clothing is lost, damaged beyond salvaging or given away, the user can delete the item entirely
6. Image upload and joint accounts coming soon!


## Built With

HTML, JavaScript, React.js, CSS, Material UI, Redux, Redux-Saga, Axios, Node.js, Express.js, PostgreSQL


## Acknowledgement
Thanks to [Prime Digital Academy](www.primeacademy.io) who equipped and helped me to make this application a reality. Thank you to the Dorian Cohort and our instructor Dev Jana
