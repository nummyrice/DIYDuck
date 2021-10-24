
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

## Edit Comments Modal

# PUG Mixin

mixin addCommentModal(answer)
    div(id=`commentModal-${answer.id}` class='comment_modal')
        form(class='comment_modal_content' action=`/comments/${answer.id}` method='post')
            input(type='hidden' name='_csrf' value=csrfToken)
            div(class='comment_container')
            label(for='comment' class="comment_label") Type your comment
            br
            textarea(class="comment_textarea" name='comment' required)
            div(class='comment_eraser')
                button(class='comment_cancelButton' type='button' id=`comment_cancelButton-${answer.id}`) Cancel
                button(class='comment_submitButton' type='submit') Submit

# JavaScript

const addComments = document.querySelectorAll('.comment-creation-button')
if(addComments){
    addComments.forEach((element) => {
        element.addEventListener('click', async (e) => {

            const id = e.target.id.split('-')[1]
            const modal = document.getElementById(`commentModal-${id}`)
            modal.style.display='block';
        })
    })}

const cancelComments = document.querySelectorAll('.comment_cancelButton')
if(cancelComments){
    cancelComments.forEach((element) => {
        element.addEventListener('click', async (e) => {

            const id = e.target.id.split('-')[1]
            const modal = document.getElementById(`commentModal-${id}`)
            modal.style.display='none';
        })
    })}

# Route

router.post('/comments/:answerId(\\d+)',csrfProtection, asyncHandler(async (req, res) => {

    //   console.log('printing Body', req.body)
    //   console.log('Printing User', res.locals.user.id)

    const answerId = req.params.answerId

      const {
        comment
      } = req.body;

      const comments = await db.Comment.create({
        comment : comment,
        answerId : answerId,
        userId : res.locals.user.id
      });

      const answer = await db.Answer.findByPk(answerId);
      let  questionId = answer.questionId

        res.redirect(`/questions/${questionId}`);

    }));



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
