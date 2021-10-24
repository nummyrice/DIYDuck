
# What is DIY Duck?

DIY Duck is an app that allows users to ask and answer questions pertaining to their DIY Projects.

# How to start development environment

- Open the repo in VSCode
- In the terminal, type in npm start, hit enter
- go to localhost:8080

# Technologies Used

- Javascript
- Express
- Pug
- CSS
- Postgresql
- Sequelize
- Postbird
- Heroku

# Live Site

Go here: https://diy-duck.herokuapp.com/

# Wiki Docs

Go here: https://github.com/nummyrice/DIYDuck/wiki

# Best Features

## Search Bar
- We created a function seach bar one can use to look for specific questions, by querying the database.
- You can search a full question, or individual keywords to get more results.

## AJAX
- Ajax was used to create modals for adding and editing questions.
- It was also used to add functionality to our buttons.

# Challenges

- It was a challenge working on components that would not negatively interact with others. It was difficult to think modularly and ensure that what everyone was working on could be “plugged into” our project and work correctly.

# Best Code

## Pug Mixins
- Pug was essential to making elements and adding functionality to our page, while keeping the code modular.

```pug
mixin generateCategories(category)
  a(class='categoryName' href=`/categories/${category.id}`) #{category.name}

mixin usersQuestion(question)
  div(id="posted-q" class="posted-q")
    div(class='q_label question_label') Question
    div(class="q_header")
      a(href=`/users/${question.userId}`)
        img(class='q_profile_photo' id=`${question.userId}` src=question.user.profilePhoto)
      div(class='q_header_info')
        div(class="q_username")=question.user.name
        div(class="q_profession_and_date")
          div(class="profession")=question.user.profession
          div(class='date_updated')=question.updatedAt
    span(class="q_title")
        a(class="questionLink" href=`/questions/${question.id}`)=question.title
    p(class="question")=question.content
```

## Nested Database Query

Nick's nested database queries 10 questions for the home page, and then the user info for those ten questions. It also shows one answer for those questions along with user info, and one comment with the comment's user info to show up as well.

```js
router.get('/',csrfProtection, asyncHandler(async function(req, res, next) {
  const categories = await db.Category.findAll()

  // get 10 most recent questions for home page
  const questions = await db.Question.findAll(
    {
    order: [['updatedAt', 'DESC']],
    limit: 10,
    include: [
      {model: db.User,
      as: 'user'},
      {model: db.Answer,
      as:'answers',
      limit: 1,
      order: [['updatedAt', 'DESC']],
    include: [{model: db.User, as: 'user'},
      {model: db.Comment, as:'comments', include:[{model: db.User,as: 'user' }]}],
  }],
  });
```
