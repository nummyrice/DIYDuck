# Express Project Skeleton

Use this project skeleton as a starting point for structuring your app. Things to note
* Sequelize configuration has not yet been added -- you will need to set that up yourself
* You may find yourself wanting to use javascript -- js files can be added in `public/javascripts` and should be appended to the Pug templates as needed
* CSS files can go in `public/stylesheets` and also will need to be added to Pug templates


# Sequelize Quick Database Access
``` Use these commands ```
* Be sure to drop any database that you have. Do not drop your user though.

* npx dotenv sequelize-cli db:create

* npx dotenv sequelize-cli db:migrate

* npx dotenv sequelize-cli db:seed:all

``` it is best to drop the entire database if you want to remigrate so that IDs for various entries are properly associated in the seed data file ```
