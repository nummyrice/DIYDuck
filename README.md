
# What is DIY Duck?

DIY Duck is an app that allows users to ask and answer questions pertaining to their DIY Projects.

# How to start development environment


# Technologies Used

- Javascript
- Express
- Pug
- CSS
- Sequelize
- Postbird
- Heroku

# Sequelize Quick Database Access
``` Use these commands ```
* Be sure to drop any database that you have. Do not drop your user though.

* npx dotenv sequelize-cli db:create

* npx dotenv sequelize-cli db:migrate

* npx dotenv sequelize-cli db:seed:all

``` it is best to drop the entire database if you want to remigrate so that IDs for various entries are properly associated in the seed data file ```

# Live Site

Go here: https://diy-duck.herokuapp.com/

# Wiki Docs

Go here: https://github.com/nummyrice/DIYDuck/wiki

# Best Features

discuss two best features

# Challenges

- We had a difficult time trying to add functionality to the category column. Our plan was to have the buttons filter out questions when clicked, and only show the questions in the selected category. We ran into a lot of bugs with this feature, especially with the routes. To resolve this issue, we all came together and walked through the code, put our heads together, and tried out each other's advice until we found a solution that worked.

# Best Code


# font awesome style guide
<!-- <i class="fas fa-camera"></i>  solid style -->
<!-- <i class="far fa-camera"></i>  regular style -->
<!-- <i class="fal fa-camera"></i>  light style -->
<!-- <i class="fad fa-camera"></i>  duotone style -->
