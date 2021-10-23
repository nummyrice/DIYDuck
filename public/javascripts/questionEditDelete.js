const deleteQuestion = document.querySelector('.question_delete')

deleteQuestion.addEventListener('click', async (e) => {
        const questionId = e.target.id.split('-')[1]
        const res = await fetch(`/questions/${questionId}`, {
            method: 'DELETE'
        })

         const data = await res.json()
         if (data.message === "Success") {
               window.location.href = '/'
        }
})


const editQuestion = document.getElementById('question_edit_button')
editQuestion.addEventListener('click', async (e) => {
    const modal = document.getElementById(`editQuestionModal`)
    modal.style.display='block';
})

const cancelEditQuestion = document.getElementById('question_edit_cancelButton')
cancelEditQuestion.addEventListener('click', async (e) => {
    const modal = document.getElementById(`editQuestionModal`)
    modal.style.display='none';
})


